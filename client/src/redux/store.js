import { createStore } from "redux";
import sessionReducer from "./reducers/sessionReducer";

export const store = createStore(
  sessionReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
