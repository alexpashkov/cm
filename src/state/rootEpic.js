import { combineEpics } from "redux-observable";
import { pollStart } from "./poll/epics";
import clientsFetch from "./clients/fetchEpic";

export default combineEpics(pollStart, clientsFetch);
