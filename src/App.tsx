import React, { Fragment } from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavigationBar from './components';
import RecommendationPage from './views/recommendation_page';
import Home from './views/home';
import Packet from './views/packet-remove-later';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <NavigationBar />
        <Switch>
          <Route path={"/"} exact>
            <Home />
          </Route>
          <Route path={"/packet"}>
            <Packet />
          </Route>
          {/* Add new page here */}
          <Route path={"/recomPage"} exact>
            <RecommendationPage/>
          </Route>
          {/* <Route path={"/example"} exact>
            <Example />
          </Route> */}
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
