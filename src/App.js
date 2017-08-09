import React, { Component } from 'react';
import Header from "./components/Header/Header";
import Routers from './Routers'

class App extends Component {
  render() {
    return (
        <div>
          <Header />
          <Routers />
        </div>
    );
  }
}

export default App;
