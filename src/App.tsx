import React, { Fragment } from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavigationBar from './components';
import RecommendationPage from './views/recommendation_page';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <NavigationBar />
        <Switch>
          <Route path={"/"} exact>
            <div>
              Hee hee hee ha
            </div>
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
