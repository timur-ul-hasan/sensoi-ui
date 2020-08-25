import { useSelector } from "react-redux";
import { getIsLoading } from "../selectors/loading";

export default () => useSelector(getIsLoading);
