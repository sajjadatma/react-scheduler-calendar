import React from 'react'
import {
  nextMonth,
  nextStep,
  previousStep,
  setTitle,
  previousMonth,
} from "./utils";
const Navigation = ({ date, setDate, triger }) => {
  const title = setTitle(date, triger);
  const nextMonthTitle = nextMonth(date, triger);
  const previousMonthTitle = previousMonth(date, triger);
  return (
    <div className="navigation">
      <>
        <div
          className="back"
          onClick={() => previousStep(date, triger, setDate)}
        >
          {previousMonthTitle}
        </div>
        <div className="monthAndYear">{title}</div>
        <div
          className="forward"
          onClick={() => nextStep(date, triger, setDate)}
        >
          {nextMonthTitle}
        </div>
      </>
    </div>
  );
};

export default Navigation;
