import { useSelector } from "react-redux";
import { getEntries, getDashboard } from "./selectors";

const useEntries = () => useSelector(getEntries);
const useDashboard = () => useSelector(getDashboard);

export { useEntries, useDashboard };
