import React from 'react';
import Users from '@screens/Users';
import Posts from '@screens/Posts';
import { Switch, Route } from 'react-router-dom';
import ROUTES from '@constants/routes';

function App() {
  return (
    <Switch>
      <Route path={ROUTES.ROOT} component={Posts} exact />
      <Route path={ROUTES.USERS} component={Users} />
      <Route path={ROUTES.POSTS} component={Posts} />
    </Switch>
  );
}

export default App;
