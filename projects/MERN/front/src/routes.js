import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { Login, Main, Links } from "./pages";

export const useRoutes = (isAuthenticated) => {
  return (
    <Switch>
      <Route path="/" exact>
        <Main />
      </Route>
      <Route path="/links" exact>
        {isAuthenticated ? <Links /> : <Redirect to="/login" />}
      </Route>
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route>The page is not found (404 error)</Route>
    </Switch>
  );
};
