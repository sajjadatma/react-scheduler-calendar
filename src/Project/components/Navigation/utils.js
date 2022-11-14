import React from "react";
import jMoment from "moment-jalaali";
import moment from "moment-jalaali";
import { MONTHS } from "../utils";

export const previousStep = (date, trigger, setDate) => {
  const newDate = moment(date)
    .subtract(1, trigger === "month" ? "jMonth" : trigger)
    .toDate();
  setDate(newDate);
};

export const nextStep = (date, trigger, setDate) => {
  const newDate = moment(date)
    .add(1, trigger === "month" ? "jMonth" : trigger)
    .toDate();
  setDate(newDate);
};

// *******************************************************
// Titles
export const setTitle = (date, trigger) => {
  const startOfWeek = jMoment(date).startOf("week");

  const startOfWeekTitle = ` ${startOfWeek.format("jD")} ${
    MONTHS[startOfWeek.format("jM") - 1]
  }  ${startOfWeek.format("jYYYY")}`;
  const endOfWeek = jMoment(date).endOf("week");
  const endOfWeekTitle = ` ${endOfWeek.format("jD")} ${
    MONTHS[endOfWeek.format("jM") - 1]
  } ${endOfWeek.format("jYYYY")}`;
  switch (trigger) {
    case "month":
      return `${MONTHS[moment(date).format("jM") - 1]} ${moment(date).format(
        "jYYYY",
      )}`;
    case "week":
      return `${startOfWeekTitle} - ${endOfWeekTitle}`;
    case "day":
      return `${moment(date).format("jD")} ${
        MONTHS[moment(date).format("jM") - 1]
      } ${moment(date).format("jYYYY")}`;
    default:
      break;
  }
};
// previous Month

export const previousMonth = (date, trigger) => {
  switch (trigger) {
    case "month":
      return (
        <button className='calendar-btn'>{`<- ${
          MONTHS[moment(date).subtract(1, "jMonth").format("jM") - 1]
        }`}</button>
      );
    case "week":
      return <button className='calendar-btn'>{"<- هفته قبل "}</button>;
    case "day":
      return <button className='calendar-btn'>{"<- روز قبل "}</button>;
    default:
      break;
  }
};

// next Month
export const nextMonth = (date, trigger) => {
  switch (trigger) {
    case "month":
      return (
        <button className='calendar-btn'>
          {`${MONTHS[moment(date).add(1, "jMonth").format("jM") - 1]} ->`}
        </button>
      );
    case "week":
      return <button className='calendar-btn'>{`هفته بعد ->`}</button>;
    case "day":
      return <button className='calendar-btn'>{`روز بعد ->`}</button>;
    default:
      break;
  }
};
