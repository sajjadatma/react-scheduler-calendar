import { useEffect, useState } from "react";
import {  parseEvents } from "./utils";
import Navigation from "./Navigation/Navigation";
import DayLabels from "./DayLables/DayLabels";
import Grid from "./Grid/Grid";
import moment from "moment-jalaali";
import { dailyFunc, weeklyFunc } from "./utils/base";
const Calendar = ({ preloadedEvents = [] }) => {
  const selectedDate = moment().format();
  const [date, setDate] = useState(selectedDate);
  const [triger, setTriger] = useState("month");
  const parsedEvents = parseEvents(preloadedEvents);
  const [events, setEvents] = useState(parsedEvents);

  useEffect(() => {
    // You could retrieve fresh events data here
    // So whenever the calendar month is toggled,
    // make a request and populate `events` with the
    // new results
    // Would be better to cache these results so you
    // don't make needless network requests
    // So you could maintain an array of `date`s
    // and simply consult this before you fire off
    // any new network requests
    // console.log("Date has changed... Let's load some fresh data");
  }, [date]);





  return (
    <div className="calendar">
      <div style={{ display: "flex" }}>
        <button onClick={() => dailyFunc(date, setDate, setTriger)}>
          روزانه
        </button>
        <button onClick={() => weeklyFunc(date, setDate, setTriger, triger)}>
          هفتگی
        </button>
        <button onClick={() => setTriger("month")}>ماهانه</button>
      </div>
      <Navigation
        date={date}
        setDate={setDate}
        triger={triger}
      />
      <div className="main">
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
          />
        </div>
      </div>
    </div>
  );
};

export default Calendar;
