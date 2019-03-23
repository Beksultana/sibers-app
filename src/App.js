import React, {Component, Fragment} from 'react';
import MainContainer from "./containers/MainContainer/MainContainer";
import {Route, Switch} from "react-router";
import {Container} from "reactstrap";
import Toolbar from "./components/UI/Toolbar/Toolbar";

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
            </Switch>
        </Container>
      </Fragment>
    );
  }
}

export default App;
