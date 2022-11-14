import React from "react";
import moment from "moment-jalaali";
import { daysOfWeek } from "../utils";

const DayLabels = ({ date, trigger }) => {
  if (trigger === "day") {
    const day = moment(date).day();
    let dayOfWeek;
    if (day !== 6) {
      dayOfWeek = daysOfWeek[day + 1];
    } else {
      dayOfWeek = daysOfWeek[0];
    }

    return <div className='dayLabel cell '>{dayOfWeek}</div>;
  }
  return daysOfWeek.map((dayLabel, index) => {
    return (
      <div className='dayLabel cell' key={index}>
        {dayLabel}
      </div>
    );
  });
};
export default DayLabels;
