import React from 'react'
import { findEventsForDate } from "../utils";
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
  if (triger === "week" && moment(baseOnTriger).startOf("jWeek").day() !== 6) {
    baseOnTriger = moment(baseOnTriger).startOf("jWeek").day(-1);
  }
  const dates = [];
  for (let i = 0; i < ROWS_COUNT * COLS_COUNT; i++) {
    const date = moment(baseOnTriger);
    dates.push({ date, events: findEventsForDate(events, date) });
    baseOnTriger = moment(baseOnTriger).add(1, "day");
  }
  return (
    <>
      {dates.map((dateObj, index) => {
        const inMonth =
          moment(dateObj.date).format("jM") === moment(date).format("jM");
        return (
          <div
            key={index}
            className={`cell ${triger === "day" && `cell-daily`} ${triger !== "month" && "cell-week-day"} ${
              moment(dateObj.date).isSame(now, "day") ? "current" : ""
            } ${!inMonth && triger === "month" ? "otherMonth" : ""}`}
          >
            <div className="date">{moment(dateObj.date).format("jD")}</div>
            {dateObj.events.map((event, index) => (
              <MiniEvent
                key={index}
                event={event}
              />
            ))}
          </div>
        );
      })}
    </>
  );
};

export default Grid;
