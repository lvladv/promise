import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { compose } from "redux";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./store/reducersCombaine";
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
