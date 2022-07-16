import { MONTHS } from "../utils";
import moment from "moment-jalaali";
const MonthNavigation = ({date, setDate}) => {
  return (
    <>
      {" "}
      <div
        className="back"
        onClick={() => {
          let newDate = moment(date);
          newDate = newDate.subtract(1, "month").toDate();
          setDate(newDate);
        }}
      >
        {"<-"} {MONTHS[moment(date).subtract(1, "month").format("jM") - 1]}
      </div>
      <div className="monthAndYear">
        {MONTHS[moment(date).format("jMM") - 1]} {moment(date).format("jYYYY")}
        {/* <a
      href="javascript:;"
      onClick={() => setShowingEventForm({ visible: true })}
    >
      +
    </a> */}
      </div>
      <div
        className="forward"
        onClick={() => {
          let newDate = moment(date);
          newDate = newDate.add(1, "month").toDate();
          setDate(newDate);
        }}
      >
        {MONTHS[moment(date).add(1, "month").format("jM") - 1]} {"->"}
      </div>
    </>
  );
};

export default MonthNavigation;
