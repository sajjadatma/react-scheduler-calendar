import React from "react";
const MiniEvent = ({ event, data }) => {
  const aTag = (children) => (
    <div className="miniEvent link-display" style={{ display: "block" }}>
      <a target={"_blank"} href={event.data.link} rel="noreferrer">
        {children}
      </a>
    </div>
  );
  const divTag = (children) => (
    <div className={`miniEvent standard`}>{children}</div>
  );
  const mappedData = event.data.dataDisplay.map((item, idx) => (
    <div key={idx}>{item}</div>
  ));
  return event.data.link ? aTag(mappedData) : divTag(mappedData);
};
export default MiniEvent;
