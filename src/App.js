import "./App.css";
import Calendar from "./components/Calendar";
 const SAMPLE_META =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

function App() {
  return (
    <div className="App">
      <Calendar
        month={7}
        year={2022}
        preloadedEvents={[
          {
            id: 1,
            name: "تعطیلات",
            dateFrom: "2022-07-10T12:00",
            dateTo: "2022-07-13T08:45",
            meta: SAMPLE_META,
            type: "Holiday",
          },
          {
            id: 2,
            name: "جلسه",
            dateFrom: "2022-07-14T12:00",
            dateTo: "2022-07-16T22:00",
            meta: SAMPLE_META,
            type: "Standard",
          },
          {
            id: 3,
            name: "شخصی",
            dateFrom: "2022-07-14T12:00",
            dateTo: "2022-07-18T12:00",
            meta: SAMPLE_META,
            type: "Busy",
          },
          {
            id: 4,
            name: "سفر کاری",
            dateFrom: "2022-07-20T07:30",
            dateTo: "2022-07-21T23:59",
            meta: SAMPLE_META,
            type: "Standard",
          },
          {
            id: 5,
            name: "سفر در تعطیلات",
            dateFrom: "2022-07-25T08:00",
            dateTo: "2022-07-26T23:59",
            meta: SAMPLE_META,
            type: "Holiday",
          },
          {
            id: 6,
            name: "سفر در تعطیلات",
            dateFrom: "2022-08-01T08:00",
            dateTo: "2022-08-04T23:59",
            meta: SAMPLE_META,
            type: "Holiday",
          },
        ]}
      />
    </div>
  );
}

export default App;
