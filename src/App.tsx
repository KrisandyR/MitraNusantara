import React, { Fragment } from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavigationBar from './components';
import Home from './views/home';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <NavigationBar />
        <Switch>
          <Route path={"/"} exact>
            <Home />
          </Route>
          {/* Add new page here */}
          {/* <Route path={"/example"} exact>
            <Example />
          </Route> */}
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
