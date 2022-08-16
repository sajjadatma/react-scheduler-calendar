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

export const findEventsForDate = (events, date) => {
  const dateTime = date.format("YYYY-MM-DD");
  return events.filter((event) => {
    const eventDateFrom = moment(event.dateFrom).format("YYYY-MM-DD");
    const eventDateTo = moment(event.dateTo).format("YYYY-MM-DD");
    const eventToTime = moment(dateTime).isSame(eventDateFrom);
    const eventFromTime = moment(dateTime).isSame(eventDateTo);
    const eventFromBetween = moment(dateTime).isBetween(
      eventDateFrom,
      eventDateTo
    );
    return (
      eventFromBetween === true ||
      eventToTime === true ||
      eventFromTime === true
    );
  });
};
