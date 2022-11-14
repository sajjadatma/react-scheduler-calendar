import React from "react";
import DayLabels from "./DayLables/DayLabels";
import Grid from "./Grid/Grid";
import Navigation from "./Navigation/Navigation";
import TriggerComponent from "./Navigation/triggerComponent";

const DefaultComponent = ({
  date,
  title,
  trigger,
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
            trigger={trigger}
            dailyTrigger={dailyTrigger}
            weeklyTrigger={weeklyTrigger}
            monthlyTrigger={monthlyTrigger}
          />
        </div>
      </div>
      <div className='main-calendar'>
        <div className='weeksLable'>
          <DayLabels trigger={trigger} date={date} />
        </div>
        <div className='days'>
          <Grid date={date} dates={dates} trigger={trigger} />
        </div>
      </div>
    </div>
  );
};

export default DefaultComponent;
