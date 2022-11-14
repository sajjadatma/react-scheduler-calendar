import React from "react";

const TriggerComponent = ({
  trigger,
  dailyTrigger,
  weeklyTrigger,
  monthlyTrigger,
}) => {
  return (
    <div className='triggers'>
      <button
        className={trigger === "day" ? "calendar-btn pointerEvent" : "calendar-btn"}
        onClick={dailyTrigger}>
        روزانه
      </button>
      <button
        className={trigger === "week" ? "calendar-btn pointerEvent" : "calendar-btn"}
        onClick={weeklyTrigger}>
        هفتگی
      </button>
      <button
        className={
          trigger === "month" ? "calendar-btn pointerEvent" : "calendar-btn"
        }
        onClick={monthlyTrigger}>
        ماهانه
      </button>
    </div>
  );
};

export default TriggerComponent;
