import React, { Component } from 'react';
import Equipos from './Components/Equipos'
import LigaProvider from './Components/Liga'
class App extends Component {

  render() {
    return (
      <div className="container">
        <LigaProvider>
          <Equipos/>
        </LigaProvider>
      </div>
    );
  }
}

export default App;
