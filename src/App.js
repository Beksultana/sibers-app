import React, {Component, Fragment} from 'react';
import MainContainer from "./containers/MainContainer/MainContainer";
import {Route, Switch} from "react-router";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route path="/" exact component={MainContainer}/>
        </Switch>
      </Fragment>
    );
  }
}

export default App;
