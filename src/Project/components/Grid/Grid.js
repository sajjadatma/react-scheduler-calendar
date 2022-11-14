import React, { useMemo } from "react";
import MiniEvent from "../MiniEvent/MiniEvent";
import moment from "moment-jalaali";
import { baseFunc } from "../utils/base";

const Grid = ({ date, dates, trigger }) => {
  const now = moment().format();
  return (
    <>
      {dates.map((dateObj, index) => {
        const inMonth =
          moment(dateObj.date).format("jM") === moment(date).format("jM");
        return (
          <div
            key={index}
            className={`cell ${trigger === "day" && `cell-daily`} ${
              trigger !== "month" && "cell-week-day"
            } ${moment(dateObj.date).isSame(now, "day") ? "current" : ""} ${
              !inMonth && trigger === "month" ? "otherMonth" : ""
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
