import * as React from 'react';
import {Router, Switch, Route} from 'react-router-dom'
import Secondary from '../secondary/secondary';
import Thirdary from '../thirdary/thirdary';
import history from '../../history';

const App: React.FC = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <Secondary/>
        </Route>
        <Route exact path="/thirdary">
          <Thirdary/>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
