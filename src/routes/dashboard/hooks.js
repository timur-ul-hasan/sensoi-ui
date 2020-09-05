import { useSelector } from "react-redux";
import { getEntries } from "./selectors";

const useEntries = () => useSelector(getEntries);

export { useEntries };
