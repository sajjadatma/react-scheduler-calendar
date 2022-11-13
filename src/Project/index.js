import React, { useMemo } from "react";
import "./styles/style.css";
import { useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import DayLabels from "./components/DayLables/DayLabels";
import Grid from "./components/Grid/Grid";
import moment from "moment-jalaali";
import { dailyFunc, weeklyFunc } from "./components/utils/base";
import jMoment from "moment-jalaali";
import { useDate } from "./hooks/useDate";
import {
  nextMonth,
  nextStep,
  previousStep,
  setTitle,
  previousMonth,
} from "./components/Navigation/utils";
import { triggerForQuery } from "./components/utils";

const Calendar = ({ preloadedEvents = [], handleSubmit }) => {
  jMoment.loadPersian({ dialect: "persian-modern" });
  const events = preloadedEvents;
  const urlSearchParams = new URLSearchParams(window.location.search);
  const location = Object.fromEntries(urlSearchParams.entries());
  const [date, setDate] = useState(location?.fromDate || moment().format());
  const diff = triggerForQuery(location);
  const [triger, setTriger] = useState(diff || "month");
  const schedule = useDate(date, triger);
  useMemo(() => {
    handleSubmit && handleSubmit(schedule, triger);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [triger, date]);

  return (
    <div className='calendar'>
      <div className='calendar-header'>
        {useMemo(
          () => (
            <Navigation
              nextMonth={nextMonth}
              nextStep={nextStep}
              previousStep={previousStep}
              setTitle={setTitle}
              previousMonth={previousMonth}
              date={date}
              setDate={setDate}
              triger={triger}
            />
          ),
          [date, triger],
        )}

        <div className='trigers'>
          <button
            className={
              triger === "day" ? "calendar-btn pointerEvent" : "calendar-btn"
            }
            onClick={() => dailyFunc(date, setDate, setTriger)}>
            روزانه
          </button>
          <button
            className={
              triger === "week" ? "calendar-btn pointerEvent" : "calendar-btn"
            }
            onClick={() => weeklyFunc(date, setDate, setTriger, triger)}>
            هفتگی
          </button>
          <button
            className={
              triger === "month" ? "calendar-btn pointerEvent" : "calendar-btn"
            }
            onClick={() => setTriger("month")}>
            ماهانه
          </button>
        </div>
      </div>
      <div className='main-calendar'>
        <div className='weeksLable'>
          <DayLabels triger={triger} date={date} />
        </div>
        <div className='days'>
          {useMemo(
            () => (
              <Grid
                date={date}
                events={events}
                actualDate={date}
                triger={triger}
                setDate={setDate}
              />
            ),
            [events, date, triger],
          )}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
