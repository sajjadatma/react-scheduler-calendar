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
  const startOfWeek = moment(date).startOf("jweek").day(-1)
  const startOfWeekTitle =` ${startOfWeek.format("jD")} ${MONTHS[startOfWeek.format("jM") - 1]}`
  const endOfWeek = moment(date).endOf("jweek").day(5)
  const endOfWeekTitle =` ${endOfWeek.format("jD")} ${MONTHS[endOfWeek.format("jM") - 1]}`
  switch (triger) {
    case "month":
      return `${MONTHS[moment(date).format("jM") - 1]} ${moment(date).format(
        "jYYYY"
      )}`;
    case "week":
      return `${startOfWeekTitle} - ${endOfWeekTitle}`
    default:
      break;
  }
};

export const previousMonth = (date, triger) => {
  switch (triger) {
    case "month":
      return `<- ${MONTHS[moment(date).subtract(1, "month").format("jM") - 1]}`;
    case "week":
      return `<- هفته قبل `;

    default:
      break;
  }
};

// next Month
export const nextMonth = (date, triger) => {
  switch (triger) {
    case "month":
      return `${MONTHS[moment(date).add(1, "month").format("jM") - 1]} ->`;
    case "week":
      return `هفته بعد ->`;
    default:
      break;
  }
};