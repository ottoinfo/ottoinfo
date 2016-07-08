import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';

import Layout from './components/Layout';
import Information from './components/information/Information';
import Settings from './components/settings/Settings';

export default (
  <Route path='/' component={Layout}>
    <IndexRoute component={Information}/>
    <Route path='settings' component={Settings}/>
  </Route>
);

