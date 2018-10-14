import { ofType } from "redux-observable";
import { from } from "rxjs";
import { map, mergeMap } from "rxjs/operators";
import types, * as actions from "./actions";
import { clients } from "../../api";

export default actions$ =>
  actions$.pipe(
    ofType(types.FETCH),
    mergeMap(() => from(clients()).pipe(map(actions.set)))
  );
