import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Dashboard from "../../components/Dashboard";
import { useEntries } from "./hooks";
import { requestDashboard } from "./actions";

export default () => {
  const dispatch = useDispatch();
  const entries = useEntries();

  useEffect(() => {
    dispatch(requestDashboard());
  }, []);

  return (
    <>
      <Dashboard entries={entries} />
    </>
  );
};
