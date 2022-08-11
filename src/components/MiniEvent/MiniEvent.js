const MiniEvent = ({ event }) => {
    return (
      <div
        className={`miniEvent ${
          event.type ? event.type.toLowerCase() : "standard"
        }`}
      >
        {event.name}
      </div>
    );
  };
  export default MiniEvent;
  