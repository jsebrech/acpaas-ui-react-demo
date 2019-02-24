import React, { Component } from 'react';
import './App.scss';
import {
  Header,
  Footer,
  Button,
} from '@acpaas-ui/react-components';
import { Link, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import Chatbot from './components/Chatbot';

/**
 * More ACPaaS UI documentation can be found here:
 * https://digipolisantwerp.github.io/acpaas-ui_react/
 */

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Header>
            <div className="m-button-group" style={{float: 'right'}}>
              <Link to={'/'}>
                <Button>Home</Button>
              </Link>
              <Link to={'/chatbot'}>
                <Button>Chatbot</Button>
              </Link>
            </div>
          </Header>
        </header>
        <div className="main u-wrapper">
          <div className="u-container u-margin-top-xx u-margin-bottom-lg" role="main">
            <Switch>
              <Route path="/chatbot" component={Chatbot}></Route>
              <Route path="/" component={Home} />
            </Switch>
          </div>
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
