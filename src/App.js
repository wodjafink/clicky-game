import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    score: 0
  };



  render() {
    return (
      <div className="App">
        <div className="page-header">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4">
                <h2>Clicky Game</h2>
              </div>
              <div className="col-md-4">
                <h2>Click an image to begin!</h2>
              </div>
              <div className="col-md-4">
                <h2>Score: 0 | Top Score: 0</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="jumbotron">
          <h1>Clicky Game!</h1>
          <p>Click on an image to earn points, but don't click on any more than once!</p>
        </div>
      </div>
    );
  }
}

export default App;
