import { findEventsForDate } from "../utils";
import MiniEvent from "../MiniEvent/MiniEvent";
import moment from "moment-jalaali";

const Grid = ({ date, events, setViewingEvent, triger }) => {
  const ROWS_COUNT = triger !== "month" ? 1 : 6;
  const COLS_COUNT = triger === "day" ? 1 : 7;
  const now = moment().format();
  let startingMonth = moment(date);
  const monthlyFunc = (date) => {
    if (triger !== "week") {
      startingMonth = moment(date).startOf("jMonth");
    }
    if (startingMonth.startOf("jWeek").day() !== 6 && triger !== "day") {
      startingMonth = startingMonth.startOf("jWeek").day(-1);
    }
    return startingMonth;
  };
  let baseOnTriger = monthlyFunc(date);
  const dates = [];
  for (let i = 0; i < ROWS_COUNT * COLS_COUNT; i++) {
    const date = moment(baseOnTriger);
    dates.push({ date, events: findEventsForDate(events, date) });
    baseOnTriger = moment(baseOnTriger).add(1, "day");
  }
  return (
    <>
      {dates.map((dateObj, index) => {
        const inMonth =
          moment(dateObj.date).format("jM") === moment(date).format("jM");
        return (
          <div
            key={index}
            className={`cell ${
              moment(dateObj.date).isSame(now, "day") ? "current" : ""
            } ${!inMonth ? "otherMonth" : ""}`}
          >
            <div className="date">{moment(dateObj.date).format("jDD jMM")}</div>
            {dateObj.events.map((event, index) => (
              <MiniEvent
                key={index}
                event={event}
                setViewingEvent={setViewingEvent}
              />
            ))}
          </div>
        );
      })}
    </>
  );
};

export default Grid;
