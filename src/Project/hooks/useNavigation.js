import {
  nextMonth,
  nextStep,
  previousStep,
  setTitle,
  previousMonth,
} from "../components/Navigation/utils";
import { dailyFunc, weeklyFunc } from "../components/utils/base";
export const useNavigation = (date, triger, setDate, setTriger) => {
  const title = setTitle(date, triger);
  const nextMonthTitle = nextMonth(date, triger);
  const previousMonthTitle = previousMonth(date, triger);
  const previousMonthFunc = () => previousStep(date, triger, setDate);
  const nextMonthFunc = () => nextStep(date, triger, setDate);
  const dailyTrigger = () => dailyFunc(date, setDate, setTriger);
  const weeklyTrigger = () => weeklyFunc(date, setDate, setTriger, triger);
  const monthlyTrigger = () => setTriger("month");

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
