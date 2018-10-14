import * as React from "react";
import { Container as UIContainer } from "semantic-ui-react";
import { Provider } from "react-redux";

import store from "../../state/store";
import Header from "../Header/Header";

export default () => (
  <Provider store={store}>
    <UIContainer>
      <Header />
    </UIContainer>
  </Provider>
);
