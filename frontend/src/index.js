import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routes/AppRouter";
import reportWebVitals from "./reportWebVitals";

import { createStore } from "redux";

const initialState = {
  count: 0,
};

//Reducer
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.payload };
    case "DECREMENT":
      return { count: state.count - action.payload };
    case "RESET":
      return { count: action.payload };
    default:
      return state;
  }
};

//Store
const store = createStore(counterReducer);

store.subscribe(() => {
  console.log(store.getState());
});

//Dispatch
store.dispatch({
  type: "INCREMENT",
  payload: 10,
});

store.dispatch({
  type: "RESET",
  payload: 0,
});

store.dispatch({
  type: "INCREMENT",
  payload: 10,
});

store.dispatch({
  type: "DECREMENT",
  payload: 5,
});

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
