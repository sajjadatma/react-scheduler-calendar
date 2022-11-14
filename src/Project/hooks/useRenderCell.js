import jMoment from "moment-jalaali";
import moment from "moment-jalaali";
import { useMemo } from "react";
import { baseFunc } from "../components/utils/base";
export const useRenderCell = (date, trigger, events, setDate) => {
  const ROWS_COUNT = trigger !== "month" ? 1 : 6;
  const COLS_COUNT = trigger === "day" ? 1 : 7;
  let baseOntrigger = date;
  if (trigger === "month") {
    baseOntrigger = baseFunc(date, setDate, trigger);
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
  if (trigger === "week" && moment(baseOntrigger).startOf("jWeek").day() !== 6) {
    baseOntrigger = moment(baseOntrigger).startOf("jWeek").day(-1);
  }
  const dates = [];

  useMemo(() => {
    for (let i = 0; i < ROWS_COUNT * COLS_COUNT; i++) {
      const date = moment(baseOntrigger);
      dates.push({ date, events: eventObj[date.format("YYYY-MM-DD")] || [] });
      // eslint-disable-next-line react-hooks/exhaustive-deps
      baseOntrigger = moment(baseOntrigger).add(1, "day");
    }
    return dates;
  }, [events, trigger, date]);

  return [dates];
};
