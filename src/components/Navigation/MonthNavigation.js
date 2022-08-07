import {
  nextMonth,
  nextStep,
  previousStep,
  setTitle,
  previousMonth,
} from "./utils";
const MonthNavigation = ({ date, setDate, triger }) => {
  // month show
  const title = setTitle(date,triger);
  const nextMonthTitle = nextMonth(date, triger);
  const previousMonthTitle = previousMonth(date,triger);
  return (
    <>
      <div className="back" onClick={() => previousStep(date, triger, setDate)}>
        {previousMonthTitle}
      </div>
      <div className="monthAndYear">{title}</div>
      <div className="forward" onClick={() => nextStep(date, triger, setDate)}>
        {nextMonthTitle}
      </div>
    </>
  );
};

export default MonthNavigation;
