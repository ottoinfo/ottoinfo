require("../css/style.scss");

import React from 'react';
import ReactDom from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

const app = document.getElementById('app');

ReactDom.render(
  <Router children={routes} history={browserHistory}/>
, app);