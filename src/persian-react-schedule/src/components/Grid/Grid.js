import React, { useMemo } from "react";
import MiniEvent from "../MiniEvent/MiniEvent";
import moment from "moment-jalaali";
import { baseFunc } from "../utils/base";

const Grid = ({ date, events, triger, setDate }) => {
  const ROWS_COUNT = triger !== "month" ? 1 : 6;
  const COLS_COUNT = triger === "day" ? 1 : 7;
  const now = moment().format();
  let baseOnTriger = date;
  if (triger === "month") {
    baseOnTriger = baseFunc(date, setDate, triger);
  }
  const eventObj = {};
  useMemo(
    () =>
      events.forEach((element) => {
        const sign = `${moment(element.dateFrom).format("YYYY-MM-DD")}`;
        eventObj[sign] = events.filter((item) => {
          return moment(item.dateFrom).format("YYYY-MM-DD") === sign;
        });
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [events],
  );
  if (triger === "week" && moment(baseOnTriger).startOf("jWeek").day() !== 6) {
    baseOnTriger = moment(baseOnTriger).startOf("jWeek").day(-1);
  }
  const dates = [];

  useMemo(() => {
    for (let i = 0; i < ROWS_COUNT * COLS_COUNT; i++) {
      const date = moment(baseOnTriger);
      dates.push({ date, events: eventObj[date.format("YYYY-MM-DD")] || [] });
      // eslint-disable-next-line react-hooks/exhaustive-deps
      baseOnTriger = moment(baseOnTriger).add(1, "day");
    }
    return dates;
  }, [events, triger, date]);
  return (
    <>
      {dates.map((dateObj, index) => {
        const inMonth =
          moment(dateObj.date).format("jM") === moment(date).format("jM");
        return (
          <div
            key={index}
            className={`cell ${triger === "day" && `cell-daily`} ${
              triger !== "month" && "cell-week-day"
            } ${moment(dateObj.date).isSame(now, "day") ? "current" : ""} ${
              !inMonth && triger === "month" ? "otherMonth" : ""
            }`}>
            <div className='date'>{moment(dateObj.date).format("jD")}</div>
            {dateObj.events.map((event, index) => (
              <MiniEvent key={index} event={event} />
            ))}
          </div>
        );
      })}
    </>
  );
};

export default React.memo(Grid);
