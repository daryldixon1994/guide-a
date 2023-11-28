let initialState = {
  session: false,
};
const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SESSION_ACTIVE":
      return {
        ...state,
        session: true,
      };
    case "SESSION_CLOSED":
      return {
        ...state,
        session: false,
      };
    default:
      return state;
  }
};

export default sessionReducer;
