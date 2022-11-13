import jMoment from "moment-jalaali";
import moment from "moment-jalaali";
import { useMemo } from "react";
import { baseFunc } from "../components/utils/base";
export const useRenderCell = (date, triger, events, setDate) => {
  const ROWS_COUNT = triger !== "month" ? 1 : 6;
  const COLS_COUNT = triger === "day" ? 1 : 7;
  let baseOnTriger = date;
  if (triger === "month") {
    baseOnTriger = baseFunc(date, setDate, triger);
  }
  const eventObj = {};
  useMemo(
    () =>
      events.forEach((element) => {
        const sign = `${jMoment(element.dateFrom).format("YYYY-MM-DD")}`;
        eventObj[sign] = events.filter((item) => {
          return moment(item.dateFrom).format("YYYY-MM-DD") === sign;
        });
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [events],
  );
  if (triger === "week" && moment(baseOnTriger).startOf("jWeek").day() !== 6) {
    baseOnTriger = moment(baseOnTriger).startOf("jWeek").day(-1);
  }
  const dates = [];

  useMemo(() => {
    for (let i = 0; i < ROWS_COUNT * COLS_COUNT; i++) {
      const date = moment(baseOnTriger);
      dates.push({ date, events: eventObj[date.format("YYYY-MM-DD")] || [] });
      // eslint-disable-next-line react-hooks/exhaustive-deps
      baseOnTriger = moment(baseOnTriger).add(1, "day");
    }
    return dates;
  }, [events, triger, date]);

  return [dates];
};
