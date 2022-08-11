import moment from "moment-jalaali";

export const MONTHS = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند",
];

export const DAYS_SHORT = [
  "شنبه",
  "یکشنبه",
  "دوشنبه",
  "سه شنبه",
  "چهارشنبه",
  "پنج‌شنبه",
  "جمعه",
];

export const toStartOfDay = (date) => {
  let newDate = moment(date);
  newDate = newDate.format("YYYY MM DD");
  return newDate;
};


export const parseEvents = (events) => {
  return events.map((event) => {
    const from = moment(event.dateFrom).format("YYYY MM DD HH:mm:ss");
    const to = moment(event.dateTo).format("YYYY MM DD HH:mm:ss");

    return {
      ...event,
      from,
      to,
    };
  });
};

export const findEventsForDate = (events, date) => {
  const dateTime = moment(date).valueOf();
  return events.filter((event) => {
    const eventFromTime = moment(toStartOfDay(event.from)).valueOf();
    const eventToTime = moment(toStartOfDay(event.to)).valueOf();

    return dateTime >= eventFromTime && dateTime <= eventToTime;
  });
};

export const startOfMonth = (date) => {
  return moment(date).startOf("jMonth")
};
