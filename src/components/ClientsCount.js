import React from "react";
import { connect } from "react-redux";
import * as clientsActions from "../state/clients/actions";
import { clients as clientsSelector } from "../state/clients/selector";

const ClientsCount = ({ n, fetch }) => (
  <div>
    Clients: {n} <button onClick={fetch}>fetch</button>
  </div>
);

export default connect(
  state => ({
    n: (clientsSelector(state) && clientsSelector(state).length) || 0
  }),
  clientsActions
)(ClientsCount);
