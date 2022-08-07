import { useEffect, useState } from "react";
import { MOCK_LOADING_TIME, parseEvents } from "./utils";
import Loader from "./Loader/Loader";
import Event from "./Events/Events";
import Feedback from "./Feedback/Feedback";
import Navigation from "./Navigation/Navigation";
import DayLabels from "./DayLables/DayLabels";
import Grid from "./Grid/Grid";
import EventForm from "./EventForm/EventForm";
import moment from "moment-jalaali";
const Calendar = ({ preloadedEvents = [] }) => {
  const selectedDate = moment().format();
  const [date, setDate] = useState(selectedDate);
  const [triger, setTriger] = useState("month");
  const [viewingEvent, setViewingEvent] = useState(false);
  const [showingEventForm, setShowingEventForm] = useState({ visible: false });
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState();

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

  const addEvent = (event) => {
    setIsLoading(true);
    setShowingEventForm({ visible: false });

    // These timeouts are to imitate HTTP requests
    // So in a real impementation, you'd interact
    // with your backend service here and handle
    // the result accordingly...
    // Likewise for `editEvent` and `deleteEvent`
    // below
    setTimeout(() => {
      const parsedEvents = parseEvents([event]);

      const updatedEvents = [...events];
      updatedEvents.push(parsedEvents[0]);

      setEvents(updatedEvents);
      setIsLoading(false);
      showFeedback({ message: "Event created successfully", type: "success" });
    }, MOCK_LOADING_TIME);
  };

  const editEvent = (event) => {
    setIsLoading(true);
    setShowingEventForm({ visible: false });

    setTimeout(() => {
      const parsedEvent = parseEvents([event]);

      const updatedEvents = [...events].map((updatedEvent) => {
        return updatedEvent.id === event.id ? parsedEvent[0] : updatedEvent;
      });

      setEvents(updatedEvents);
      setIsLoading(false);
      showFeedback({ message: "Event edited successfully", type: "success" });
    }, MOCK_LOADING_TIME);
  };

  const deleteEvent = (event) => {
    setIsLoading(true);
    setViewingEvent(null);

    setTimeout(() => {
      const updatedEvents = [...events].filter(
        (finalEvent) => finalEvent.id !== event.id
      );

      setEvents(updatedEvents);
      setIsLoading(false);
      showFeedback({ message: "Event deleted successfully", type: "success" });
    }, MOCK_LOADING_TIME);
  };

  const showFeedback = ({ message, type, timeout = 2500 }) => {
    setFeedback({ message, type });
    setTimeout(() => {
      setFeedback(null);
    }, timeout);
  };

  return (
    <div className="calendar">
      {isLoading && <Loader />}

      {feedback && <Feedback message={feedback.message} type={feedback.type} />}
      <div style={{ display: "flex" }}>
        <button onClick={() => setTriger("day")}>روزانه</button>
        <button onClick={() => setTriger("week")}>هفتگی</button>
        <button onClick={() => setTriger("month")}>ماهانه</button>
      </div>
      <Navigation
        date={date}
        setDate={setDate}
        setShowingEventForm={setShowingEventForm}
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
            setShowingEventForm={setShowingEventForm}
            setViewingEvent={setViewingEvent}
            actualDate={date}
            triger={triger}
          />
        </div>
      </div>

      {viewingEvent && (
        <Event
          event={viewingEvent}
          setShowingEventForm={setShowingEventForm}
          setViewingEvent={setViewingEvent}
          deleteEvent={deleteEvent}
        />
      )}

      {showingEventForm && showingEventForm.visible && (
        <EventForm
          withEvent={showingEventForm.withEvent}
          preselectedDate={showingEventForm.preselectedDate}
          setShowingEventForm={setShowingEventForm}
          addEvent={addEvent}
          editEvent={editEvent}
          setViewingEvent={setViewingEvent}
        />
      )}
    </div>
  );
};

export default Calendar;
