const MiniEvent = ({ event }) => {
  return (
    <div
      className={`miniEvent ${
        event.type ? event.type.toLowerCase() : "standard"
      }`}
    >
      <div>{event.name}</div>
      <div>ساعت : 10:00 (50)</div>
    </div>
  );
};
export default MiniEvent;
