import React, { useMemo } from "react";
const MiniEvent = ({ event }) => {
  const aTag = (children) => (
    <div className='miniEvent link-display' style={{ display: "block" }}>
      <a target={"_blank"} href={event.data.link} rel='noreferrer'>
        {children}
      </a>
    </div>
  );
  const divTag = (children) => (
    <div className={`miniEvent standard`}>{children}</div>
  );
  const mappedData = useMemo(
    () => event.data.dataDisplay.map((item, idx) => <div key={idx}>{item}</div>),
    [event],
  );
  return event.data.link ? aTag(mappedData) : divTag(mappedData);
};
export default React.memo(MiniEvent);
