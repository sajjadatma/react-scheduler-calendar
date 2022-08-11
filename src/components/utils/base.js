import moment from "moment-jalaali";
export const baseFunc = (date) => {
  let startingMonth = moment(date);
  startingMonth = moment(date).startOf("jMonth");
  if (startingMonth.startOf("jWeek").day() !== 6) {
    startingMonth = startingMonth.startOf("jWeek").day(-1);
  }
  return startingMonth;
};

export const weeklyFunc = (date, setDate, setTriger) => {
  setTriger("week");
  const today = moment().format("jYYYY-jMM-jDD");
  const dateMonth = moment(date);
  let startingMonth = moment(date);
  startingMonth = moment(date).startOf("jMonth");
  if (
    moment(today).isBetween(
      dateMonth.startOf("jMonth").format("jYYYY-jMM-jDD"),
      dateMonth.endOf("jMonth").format("jYYYY-jMM-jDD")
    )
  ) {
    startingMonth = moment().startOf("jWeek").day(-1);
    if (moment(startingMonth).startOf("jWeek").day() !== 6) {
      startingMonth = moment(startingMonth).startOf("jWeek").day(-1);
    }
  }
  setDate(startingMonth.toDate());
};

export const dailyFunc = (date, setDate, setTriger) => {
  setTriger("day");
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
