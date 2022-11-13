import React from "react";
const Navigation = ({
  previousMonthFunc,
  previousMonthTitle,
  title,
  nextMonthFunc,
  nextMonthTitle,
}) => {
  return (
    <div className='navigation'>
      <>
        <div className='back' onClick={previousMonthFunc}>
          {previousMonthTitle}
        </div>
        <div className='monthAndYear'>{title}</div>
        <div className='forward' onClick={nextMonthFunc}>
          {nextMonthTitle}
        </div>
      </>
    </div>
  );
};

export default Navigation;
