export const getEntries = state => state.dashboard.dashboard?.entries || [];
export const getDashboard = state => {
  console.log(state);
  return state.dashboard.dashboard;
};
