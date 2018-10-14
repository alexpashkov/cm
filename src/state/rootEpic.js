import { combineEpics } from "redux-observable";
import clientsFetch from "./clients/fetchEpic";

export default combineEpics(clientsFetch);
