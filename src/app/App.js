import './App.scss';

import React, { Component } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import history from './router/history';
import Loadable from 'react-loadable';
import Loader from './components/Loader';


const DummyPage = Loadable({
  loader: () => import('./pages/DummyPage'),
  loading: Loader,
  delay: 300, // default 200 
  timeout: 8000
});



class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" render={props => (
            <div className="root-wrapper">
              <DummyPage />
            </div>
          )}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;