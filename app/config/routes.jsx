import React from "react"
import {Router, Route, browserHistory, IndexRoute} from "react-router"

import Main from "../pages/Main.jsx"
import Welcome from "../pages/Welcome.jsx"
import Admin from "../pages/Admin.jsx"
import Teacher from "../pages/Teacher.jsx"

module.exports = (
  <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Welcome} />
        <Route path="admin" component={Admin} />
        <Route path="teacher" component={Teacher} />
      </Route>
  </Router>
);
