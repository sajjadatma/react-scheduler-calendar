import moment from "moment-jalaali";
// Some config for convenience
export const MOCK_LOADING_TIME = 1000;
export const SAMPLE_META =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

// Utilities/helpers
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

export const pad = (input) => {
  return input < 10 ? "0" + input : input;
};

// I'm using default <input type="datepick-local">,
// so a specific date format is required
export const dateToInputFormat = (date) => {
  if (!date) {
    return null;
  }

  const month = pad(moment(date).format("MM") + 1);
  const day = pad(moment(date).format("DD"));
  const hours = pad(moment(date).format("HH"));
  const minutes = pad(moment(date).format("mm"));

  return `${moment(date).year()}-${month}-${day}T${hours}:${minutes}`;
};

// Could be used to filter out invalid events data also
// (ie. missing properties) or events that can't be parsed
// to contain valid to/from dates
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
