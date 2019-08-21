import React from "react";
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history';

import BlogDashboardPage from "../components/BlogDashboardPage";
import AddPostPage from "../components/AddPostPage";
import PostItem from "../components/PostItem";
import EditPostPage from "../components/EditPostPage";

const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" exact component={BlogDashboardPage} />
      <Route path="/posts/:id" exact component={PostItem} />
      <Route path="/addpost" component={AddPostPage} />
      <Route path="/posts/:id/edit" component={EditPostPage} />
    </Switch>
  </Router>
);

export default AppRouter;
