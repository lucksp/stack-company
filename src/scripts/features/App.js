import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./home";
import CompanyCardOverview from "./company/cardOverview";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/:id" component={CompanyCardOverview} />
    </Switch>
  );
};

export default App;
