import {
  nextMonth,
  nextStep,
  previousStep,
  setTitle,
  previousMonth,
} from "../components/Navigation/utils";
import { dailyFunc, weeklyFunc } from "../components/utils/base";
export const useNavigation = (date, trigger, setDate, settrigger) => {
  const title = setTitle(date, trigger);
  const nextMonthTitle = nextMonth(date, trigger);
  const previousMonthTitle = previousMonth(date, trigger);
  const previousMonthFunc = () => previousStep(date, trigger, setDate);
  const nextMonthFunc = () => nextStep(date, trigger, setDate);
  const dailyTrigger = () => dailyFunc(date, setDate, settrigger);
  const weeklyTrigger = () => weeklyFunc(date, setDate, settrigger, trigger);
  const monthlyTrigger = () => settrigger("month");

  return [
    title,
    nextMonthTitle,
    previousMonthTitle,
    previousMonthFunc,
    nextMonthFunc,
    dailyTrigger,
    weeklyTrigger,
    monthlyTrigger,
  ];
};
