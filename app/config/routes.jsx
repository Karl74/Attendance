import React from "react"
import {Router, Route, browserHistory, IndexRoute} from "react-router"

import Main from "../pages/Main"
import Welcome from "../pages/Welcome"
import Admin from "../pages/Admin"
import Teacher from "../pages/Teacher"

module.exports = (
  <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Welcome} />
        <Route path="admin" component={Admin} />
        <Route path="teacher" component={Teacher} />
      </Route>
  </Router>
);
