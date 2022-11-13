import React from "react";

const TriggerComponent = ({
  triger,
  dailyTrigger,
  weeklyTrigger,
  monthlyTrigger,
}) => {
  return (
    <div className='trigers'>
      <button
        className={triger === "day" ? "calendar-btn pointerEvent" : "calendar-btn"}
        onClick={dailyTrigger}>
        روزانه
      </button>
      <button
        className={triger === "week" ? "calendar-btn pointerEvent" : "calendar-btn"}
        onClick={weeklyTrigger}>
        هفتگی
      </button>
      <button
        className={triger === "month" ? "calendar-btn pointerEvent" : "calendar-btn"}
        onClick={monthlyTrigger}>
        ماهانه
      </button>
    </div>
  );
};

export default TriggerComponent;
