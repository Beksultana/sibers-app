import React, {Component, Fragment} from 'react';
import MainContainer from "./containers/MainContainer/MainContainer";
import {Route, Switch} from "react-router";
import {Container} from "reactstrap";
import Toolbar from "./components/UI/Toolbar/Toolbar";
import Edit from "./containers/Edit/Edit";

class App extends Component {
  render() {
    return (
      <Fragment>
          <header>
              <Toolbar/>
          </header>
        <Container>
            <Switch>
                <Route path="/" exact component={MainContainer}/>
                <Route path="/edit/:id" exact component={Edit}/>
            </Switch>
        </Container>
      </Fragment>
    );
  }
}

export default App;
