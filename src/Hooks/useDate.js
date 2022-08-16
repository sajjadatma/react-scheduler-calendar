import jMoment from "moment-jalaali";
import moment from "moment-jalaali";
export const useDate = (date, triger) => {
  if (triger === "day") {
    return {
      start: moment(date).format("jYYYY-jMM-jDD"),
      end: moment(date).format("jYYYY-jMM-jDD"),
    };
  }
  if (triger === "week") {
    return {
      start: jMoment(date).startOf("week").format("jYYYY-jMM-jDD"),
      end: jMoment(date).endOf("week").format("jYYYY-jMM-jDD"),
    };
  }
  if (triger === "month") {
    return {
      start: jMoment(date).startOf("jMonth").format("jYYYY-jMM-jDD"),
      end: jMoment(date).endOf("jMonth").format("jYYYY-jMM-jDD"),
    };
  }
};
