import { DAYS_SHORT } from "../utils";

const DayLabels = ({ date, dates }) => {
  return DAYS_SHORT.map((dayLabel, index) => {
    return (
      <div className="dayLabel cell" key={index}>
        {dayLabel}
      </div>
    );
  });
};
export default DayLabels;