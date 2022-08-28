import React from "react";
import "./styles/style.css";
import { useEffect, useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import DayLabels from "./components/DayLables/DayLabels";
import Grid from "./components/Grid/Grid";
import moment from "moment-jalaali";
import { dailyFunc, weeklyFunc } from "./components/utils/base";
import jMoment from "moment-jalaali";
import { useDate } from "./Hooks/useDate";
const Calendar = ({ preloadedEvents = [], handleSubmit }) => {
  jMoment.loadPersian({ dialect: "persian-modern" });
  const selectedDate = moment().format();
  const [date, setDate] = useState(selectedDate);

  const [triger, setTriger] = useState("month");
  const [events, setEvents] = useState(preloadedEvents);
  const schedule = useDate(date, triger);
  useEffect(() => {
    handleSubmit && handleSubmit(schedule, triger);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [triger, date]);

  useEffect(() => {
    setEvents(preloadedEvents);
  }, [preloadedEvents]);

  return (
    <div className='calendar'>
      <div className='calendar-header'>
        <Navigation date={date} setDate={setDate} triger={triger} />
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
          <Grid
            date={date}
            events={events}
            actualDate={date}
            triger={triger}
            setDate={setDate}
            schedule={schedule}
          />
        </div>
      </div>
    </div>
  );
};

export default Calendar;
