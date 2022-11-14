import jMoment from "moment-jalaali";
import moment from "moment-jalaali";
export const baseFunc = (date) => {
  return jMoment(date).startOf("jMonth").startOf("week");
};

export const weeklyFunc = (date, setDate, settrigger) => {
  settrigger("week");
  const today = jMoment();
  let startingMonth = jMoment(date).startOf("jMonth");
  if (
    jMoment(today).isBetween(
      jMoment(date).startOf("jMonth"),
      jMoment(date).endOf("jMonth"),
    )
  ) {
    startingMonth = moment();
  }
  setDate(startingMonth.toDate());
};

export const dailyFunc = (date, setDate, settrigger) => {
  settrigger("day");
  const today = moment().format("jM");
  const dateMonth = moment(date).format("jM");
  let startingMonth = moment(date);
  if (dateMonth !== today) {
    startingMonth = moment(date).startOf("jMonth");
  } else if (dateMonth === today) {
    startingMonth = moment();
  }
  setDate(startingMonth.toDate());
};
