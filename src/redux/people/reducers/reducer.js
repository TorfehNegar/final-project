let INITIALSTATS={
  peoples:[]
};
export const personsReducer = (state = INITIALSTATS, action) => {
  switch (action.type) {
  case "GET_DATA":
    return [...action.payload];
  default:
    return state;
  }
};
