import jMoment from "moment-jalaali";
import moment from "moment-jalaali";
export const useDate = (date, triger) => {
  if (triger === "day") {
    return {
      start: moment(date).format("YYYY/MM/DD 00:00"),
      end: moment(date).format("YYYY/MM/DD 23:59"),
    };
  }
  if (triger === "week") {
    return {
      start: jMoment(date).startOf("week").format("YYYY/MM/DD 00:00"),
      end: jMoment(date).endOf("week").format("YYYY/MM/DD 23:59"),
    };
  }
  if (triger === "month") {
    return {
      start: jMoment(date).startOf("jMonth").format("YYYY/MM/DD 00:00"),
      end: jMoment(date).endOf("jMonth").format("YYYY/MM/DD 23:59"),
    };
  }
};
