import moment from "moment-jalaali";
import { MONTHS } from "../utils";

export const previousStep = (date, triger, setDate) => {
  const newDate = moment(date)
    .subtract(1, triger === "month" ? "jMonth" : triger)
    .toDate();
  setDate(newDate);
};

export const nextStep = (date, triger, setDate) => {
  const newDate = moment(date).add(1, triger === "month" ? "jMonth" : triger).toDate();
  setDate(newDate);
};

// *******************************************************
// Titles
export const setTitle = (date, triger) => {
  let startOfWeek = moment(date)
  if (startOfWeek.day() !== 6) {
    startOfWeek = startOfWeek.startOf("jWeek").day(-1);
  }
  
  const startOfWeekTitle = ` ${startOfWeek.format("jD")} ${
    MONTHS[startOfWeek.format("jM") - 1]
  }`;
  let endOfWeek = moment(date).endOf("week").day(5)
  if (moment(date).day() === 6) {
    endOfWeek = endOfWeek.add("jWeek").day(12);
  }
  const endOfWeekTitle = ` ${endOfWeek.format("jD")} ${
    MONTHS[endOfWeek.format("jM") - 1]
  }`;
  switch (triger) {
    case "month":
      return `${MONTHS[moment(date).format("jM") - 1]} ${moment(date).format(
        "jYYYY"
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

export const previousMonth = (date, triger) => {
  switch (triger) {
    case "month":
      return `<- ${
        MONTHS[moment(date).subtract(1, "jMonth").format("jM") - 1]
      }`;
    case "week":
      return `<- هفته قبل `;
    case "day":
      return `<- روز قبل `;
    default:
      break;
  }
};

// next Month
export const nextMonth = (date, triger) => {
  switch (triger) {
    case "month":
      return `${MONTHS[moment(date).add(1, "jMonth").format("jM") - 1]} ->`;
    case "week":
      return `هفته بعد ->`;
    case "day":
      return `روز بعد ->`;
    default:
      break;
  }
};
