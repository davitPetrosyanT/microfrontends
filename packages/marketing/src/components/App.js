import React from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";

import Landing from "./Landing";
import Pricing from "./Pricing";

function App() {
  return (
    <div>
      <StylesProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/pricing" component={Pricing} />
            <Route path="/" component={Landing} />
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </div>
  );
}

export default App;
