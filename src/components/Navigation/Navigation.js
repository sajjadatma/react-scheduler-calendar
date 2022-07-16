import moment from "moment-jalaali";
import MonthNavigation from "./MonthNavigation";
const Navigation = ({ date, setDate, setShowingEventForm }) => {
  const startOfMonth = moment(date).startOf("jMonth").format("YYYY MM DD");
  let startWeek = moment(startOfMonth).startOf("jWeek").day(-2);
  const nextWeek = moment(startWeek).add(3,"week").add(1,"day").format("jYYYY jMM jDD")
  let x = [];
  const week = () => {
    for (let i = 1; i <= 7; i++) {
      x.push(moment(startWeek).add(i, "days").format("jYYYY jMM jDD"));
    }
    return x;
  };
  week()
  console.log(x,'next');

  return (
    <div className="navigation">
      <MonthNavigation date={date} setDate={setDate} />
    </div>
  );
};

export default Navigation;
