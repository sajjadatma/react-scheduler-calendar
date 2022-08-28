
import React from 'react'
import moment from "moment-jalaali";
import { DAYS_SHORT } from "../utils";

const DayLabels = ({ date, triger }) => {
  if (triger === "day") {
    const day = moment(date).day();
    let dayOfWeek;
    if (day !== 6) {
      dayOfWeek = DAYS_SHORT[day + 1];
    } else {
      dayOfWeek = DAYS_SHORT[0];
    }

    return <div className="dayLabel cell ">{dayOfWeek}</div>;
  }
  return DAYS_SHORT.map((dayLabel, index) => {
    return (
      <div className="dayLabel cell" key={index}>
        {dayLabel}
      </div>
    );
  });
};
export default DayLabels;
