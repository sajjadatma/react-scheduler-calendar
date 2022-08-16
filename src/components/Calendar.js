import { useEffect, useState } from "react";
import Navigation from "./Navigation/Navigation";
import DayLabels from "./DayLables/DayLabels";
import Grid from "./Grid/Grid";
import moment from "moment-jalaali";
import { dailyFunc, weeklyFunc } from "./utils/base";
import jMoment from "moment-jalaali";
import { useDate } from "../Hooks/useDate";
const Calendar = ({ preloadedEvents = [], parentCallback, handleSubmit }) => {
  jMoment.loadPersian({ dialect: "persian-modern" });
  const selectedDate = moment().format();
  const [date, setDate] = useState(selectedDate);
  const [triger, setTriger] = useState("month");
  const [events] = useState(preloadedEvents);
  const schedule = useDate(date, triger);

  useEffect(() => {
    handleSubmit && handleSubmit(schedule, triger);
  }, [schedule, triger, handleSubmit]);

  return (
    <div className="calendar">
      <div className="calendar-header">
        <Navigation date={date} setDate={setDate} triger={triger} />
        <div className="trigers">
          <button
            className="calendar-btn"
            onClick={() => dailyFunc(date, setDate, setTriger)}
          >
            روزانه
          </button>
          <button
            className="calendar-btn"
            onClick={() => weeklyFunc(date, setDate, setTriger, triger)}
          >
            هفتگی
          </button>
          <button className="calendar-btn" onClick={() => setTriger("month")}>
            ماهانه
          </button>
        </div>
      </div>
      <div className="main-calendar">
        <div className="weeksLable">
          <DayLabels triger={triger} date={date} />
        </div>
        <div className="days">
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
