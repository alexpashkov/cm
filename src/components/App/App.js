import * as React from "react";
import { Container as UIContainer } from "semantic-ui-react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import reducer from "../../reducers";
import Header from "../Header/Header";

const store = createStore(reducer);

export default () => (
  <Provider store={store}>
    <UIContainer>
      <Header />
    </UIContainer>
  </Provider>
);
