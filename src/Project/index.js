import React, { useMemo } from "react";
import "./styles/style.css";
import { useState } from "react";
import moment from "moment-jalaali";
import jMoment from "moment-jalaali";
import { useDate } from "./hooks/useDate";
import { useNavigation } from "./hooks/useNavigation";
import { useRenderCell } from "./hooks/useRenderCell";
import DefaultComponent from "./components/default";
import { daysOfWeek, triggerForQuery } from "./components/utils";
const Calendar = ({ preloadedEvents = [], handleSubmit, userDate, children }) => {
  jMoment.loadPersian({ dialect: "persian-modern" });
  const events = preloadedEvents;
  const urlSearchParams = new URLSearchParams(window.location.search);
  const location = Object.fromEntries(urlSearchParams.entries());
  const diff = triggerForQuery(location);
  const [date, setDate] = useState(moment(userDate).format() || moment().format());
  const hasChildren = children ? true : false;
  const [triger, setTriger] = useState(diff || "month");
  const [dates] = useRenderCell(date, triger, events, setDate);
  const schedule = useDate(date, triger);
  console.log(schedule);
  useMemo(() => {
    handleSubmit && handleSubmit(schedule, triger);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [triger, date]);
  const [
    title,
    nextMonthTitle,
    previousMonthTitle,
    previousMonthFunc,
    nextMonthFunc,
    dailyTrigger,
    weeklyTrigger,
    monthlyTrigger,
  ] = useNavigation(date, triger, setDate, setTriger);
  return (
    <div>
      {hasChildren ? (
        React.cloneElement(children, {
          date,
          title,
          triger,
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
          triger={triger}
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
