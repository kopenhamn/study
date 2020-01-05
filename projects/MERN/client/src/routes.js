import React from "react";
import { Route, Switch } from "react-router-dom";

import { Login, Main, Links } from "./pages";

export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path='/' exact>
          <Main />
        </Route>
        <Route path='/links' exact>
          <Links />
        </Route>
      </Switch>
    );
  }

  return <Login />;
};
