import { createEpicMiddleware } from "redux-observable";
import { compose, createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import rootEpic from "./rootEpic";
import * as pollActions from "../state/poll/actions";

const epicMiddleware = createEpicMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(rootEpic);

store.dispatch(pollActions.start());

export default store;
