import moment from "moment-jalaali";
import { MONTHS } from "../utils";


export const previousStep = (date, triger, setDate) => {
  const newDate = moment(date).subtract(1, triger).format();
  setDate(newDate);
};

export const nextStep = (date, triger, setDate) => {
  const newDate = moment(date).add(1, triger).format();
  setDate(newDate);
};

// *******************************************************
// Titles
export const setTitle = (date, triger) => {
  const startOfWeek = moment(date).day(-1);
  const startOfWeekTitle = ` ${startOfWeek.format("jD")} ${
    MONTHS[startOfWeek.format("jM") - 1]
  }`;
  const endOfWeek = moment(date).day(5);
  console.log(startOfWeek.format("jM jDD"));
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
      return `${moment(date).format("jD")} ${MONTHS[moment(date).format("jM") - 1]}`;
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
