import './index.scss';

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loader from '../../components/Loader';

const ComponentOne = Loadable({
  loader: () => import('../../containers/Home'),
  loading: Loader,
  delay: 300, // default 200 
  timeout: 8000
});



class DummyPage extends Component {
  render() {
    return (
      <div className="main-app-container">
        <Switch>
          <Route path='/home' render={props => (<ComponentOne {...props} />)} />
        </Switch>
      </div>
    );
  }
}

export default DummyPage;