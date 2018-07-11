import React, { Component } from 'react';
import './App.css';
import Card from "./components/Card"
import Wrapper from "./components/Wrapper";
import characters from "./characters.json"

class App extends Component {

  state = {
    score: 0,
    topScore: 0,
    drawCharactersArray: [],
    clickedCardsArray: [0]
  };

  shuffleCharacterArray(characters) {
    console.log("Shuffling");
    let array = characters;
    let i = array.length - 1;
    console.log("i starts at " + i);
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    for (i = 0; i < array.length; i++){
      console.log(array[i])
    }
    return array;
  }

  componentDidMount() {
    // this.setState({drawCharactersArray: characters}, )
    this.setState({drawCharactersArray: this.shuffleCharacterArray(characters)})
  }

  updateTopScore = () =>{

    if (this.state.score > this.state.topScore){
      // console.log("Top is " + this.state.topScore);
      this.setState({topScore: this.state.score + 0});
    }
  }

  clickCard = id => {

    var isInArray = false;

    let clickedCardsArray = this.state.clickedCardsArray;

    for (var i = 0; i < clickedCardsArray.length; i++){
      if (clickedCardsArray[i] === id)
        isInArray = true;
    }

    if (isInArray){
      // Score gets set back to zero
      this.setState({score: 0});
    } else {
      // Add to the clicked array
      this.setState({
        clickedCardsArray: [...this.state.clickedCardsArray, id]
      })

      // Add to score
      this.setState({score: this.state.score + 1}, this.updateTopScore);
    }

    this.setState({drawCharactersArray: this.shuffleCharacterArray(characters)})

  }

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
                <h2>Score: {this.state.score} | Top Score: {this.state.topScore}</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="jumbotron">
          <h1>Clicky Game!</h1>
          <p>Click on an image to earn points, but don't click on any more than once!</p>
        </div>
        <Wrapper>
            {this.state.drawCharactersArray.map(character => (
              <Card 
                clickCard={this.clickCard}
                id={character.id}
                key={character.id}
                name={character.name}
                image={character.image}
              />
            ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
