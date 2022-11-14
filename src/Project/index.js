import React, { useMemo } from "react";
import "./styles/style.css";
import { useState } from "react";
import moment from "moment-jalaali";
import jMoment from "moment-jalaali";
import { useDate } from "./hooks/useDate";
import { useNavigation } from "./hooks/useNavigation";
import { useRenderCell } from "./hooks/useRenderCell";
import DefaultComponent from "./components/default";
import { daysOfWeek } from "./components/utils";
const Calendar = ({
  preloadedEvents = [],
  handleSubmit,
  defaultDate,
  children,
  defaultTrigger,
}) => {
  jMoment.loadPersian({ dialect: "persian-modern" });
  const events = preloadedEvents;
  const [date, setDate] = useState(
    moment(defaultDate).format() || moment().format(),
  );
  const hasChildren = children ? true : false;
  const initialTirgger =
    defaultTrigger === "day" ||
    defaultTrigger === "week" ||
    defaultTrigger === "month"
      ? defaultTrigger
      : undefined;
  const [trigger, settrigger] = useState(initialTirgger || "month");
  const [dates] = useRenderCell(date, trigger, events, setDate);
  const schedule = useDate(date, trigger);
  useMemo(() => {
    handleSubmit && handleSubmit(schedule, trigger);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger, date]);
  const [
    title,
    nextMonthTitle,
    previousMonthTitle,
    previousMonthFunc,
    nextMonthFunc,
    dailyTrigger,
    weeklyTrigger,
    monthlyTrigger,
  ] = useNavigation(date, trigger, setDate, settrigger);
  return (
    <div>
      {hasChildren ? (
        React.cloneElement(children, {
          date,
          title,
          trigger,
          nextMonthTitle,
          previousMonthTitle,
          previousMonthFunc,
          nextMonthFunc,
          dailyTrigger,
          weeklyTrigger,
          monthlyTrigger,
          dates,
          daysOfWeek,
        })
      ) : (
        <DefaultComponent
          date={date}
          title={title}
          trigger={trigger}
          nextMonthTitle={nextMonthTitle}
          previousMonthTitle={previousMonthTitle}
          previousMonthFunc={previousMonthFunc}
          nextMonthFunc={nextMonthFunc}
          dailyTrigger={dailyTrigger}
          weeklyTrigger={weeklyTrigger}
          monthlyTrigger={monthlyTrigger}
          dates={dates}
        />
      )}
    </div>
  );
};

export default Calendar;
