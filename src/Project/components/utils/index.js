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

export const triggerForQuery = (location) => {
  if (location.fromDate !== undefined) {
    const difference =
      moment(location?.toDate).diff(location?.fromDate, "day") + 1;
    switch (difference) {
      case 30:
        return "month";
      case 31:
        return "month";
      case 7:
        return "week";
      case 1:
        return "day";
      default:
        break;
    }
  }
};
