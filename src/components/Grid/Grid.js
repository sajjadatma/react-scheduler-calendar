import { findEventsForDate, toStartOfDay } from "../utils";
import MiniEvent from "../MiniEvent/MiniEvent";
import moment from "moment-jalaali";

const Grid = ({
  date,
  events,
  setViewingEvent,
  setShowingEventForm,
  actualDate,
}) => {
  const ROWS_COUNT = 6;
  const now = moment()
  const currentDate = toStartOfDay(now.format("jYYYY jMM jDD"));
  const persianDate = moment(date);
  let startingMonth = moment(persianDate).startOf("jMonth");

  let startingDate = moment(startingMonth).startOf("jWeek").day(-1);
  const dates = [];
  for (let i = 0; i < ROWS_COUNT * 7; i++) {
    const date = moment(startingDate);
    dates.push({ date, events: findEventsForDate(events, date) });
    startingDate = moment(startingDate).add(1, "day");
  }
  return (
    <>
      {dates.map((date, index) => {
        const persianDate = moment(date.date).format("jYYYY jMM jDD");
        const startMonth = moment(actualDate).startOf("jMonth");
        const endMonth = moment(actualDate).endOf("jMonth");
        const Y = startMonth.subtract(1, "day")
        return (
          <div
            key={index}
           className={`cell ${
            moment(persianDate).isSame(currentDate, "day")
                ? "current"
                : ""
            } ${
              !moment(date.date).isBetween(Y, endMonth)
                ? "otherMonth"
                : ""
            }`}
          >
            <div className="date">
              {moment(date.date).format("jDD")}
              {/* <a
                href="javascript:;"
                className="addEventOnDay"
                onClick={() =>
                  setShowingEventForm({
                    visible: true,
                    preselectedDate: date.date,
                  })
                }
              >
                +
              </a> */}
            </div>
            {date.events.map((event, index) => (
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
