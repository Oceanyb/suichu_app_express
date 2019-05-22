import React from "react";
import { HashRouter, Switch, Route } from 'react-router-dom'
import Register from '../../pages/Register'

const BasicRoute = () => (
  <HashRouter>
    <Switch>
      <Route exact path='/' component={Register} />
    </Switch>
  </HashRouter>
)

export default BasicRoute;