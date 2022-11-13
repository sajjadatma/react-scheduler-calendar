import React from "react";
import DayLabels from "./DayLables/DayLabels";
import Grid from "./Grid/Grid";
import Navigation from "./Navigation/Navigation";
import TriggerComponent from "./Navigation/triggerComponent";

const DefaultComponent = ({
  date,
  title,
  triger,
  nextMonthTitle,
  previousMonthTitle,
  previousMonthFunc,
  nextMonthFunc,
  dailyTrigger,
  weeklyTrigger,
  monthlyTrigger,
  dates,
}) => {
  return (
    <div className='calendar'>
      <div className='calendar-header'>
        <Navigation
          nextMonthTitle={nextMonthTitle}
          previousMonthTitle={previousMonthTitle}
          title={title}
          previousMonthFunc={previousMonthFunc}
          nextMonthFunc={nextMonthFunc}
        />
        <div>
          <TriggerComponent
            triger={triger}
            dailyTrigger={dailyTrigger}
            weeklyTrigger={weeklyTrigger}
            monthlyTrigger={monthlyTrigger}
          />
        </div>
      </div>
      <div className='main-calendar'>
        <div className='weeksLable'>
          <DayLabels triger={triger} date={date} />
        </div>
        <div className='days'>
          <Grid date={date} dates={dates} triger={triger} />
        </div>
      </div>
    </div>
  );
};

export default DefaultComponent;
