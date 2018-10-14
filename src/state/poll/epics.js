import { interval, of } from "rxjs";
import { mapTo, mergeMap, tap } from "rxjs/operators";
import { ofType } from "redux-observable";

import types, * as pollActions from "./actions";
import clinetsActionTypes from "../clients/actions";

export const pollStart = action$ =>
  action$.pipe(
    ofType(types.POLL_START),
    mergeMap(() => interval(500).pipe(mapTo(pollActions.poll())))
  );

export const poll = actions$ =>
  actions$.pipe(
    ofType(types.POLL),
    mapTo(of(clinetsActionTypes.FETCH))
  );
