import MonthNavigation from "./MonthNavigation";
const Navigation = ({ date, setDate, triger, setShowingEventForm }) => {
  return (
    <div className="navigation">
      <MonthNavigation date={date} triger={triger} setDate={setDate} />
    </div>
  );
};

export default Navigation;
