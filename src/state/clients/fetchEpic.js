import { ofType } from "redux-observable";
import { from, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";
import { compose } from "ramda";

import * as globalActions from "../actions";
import types, * as actions from "./actions";
import * as locateAPI from "../../api/locate";

export default actions$ =>
  actions$.pipe(
    ofType(types.FETCH),
    mergeMap(() =>
      from(locateAPI.clients()).pipe(
        map(actions.set),
        catchError(
          compose(
            of,
            globalActions.APIFetchError
          )
        )
      )
    )
  );
