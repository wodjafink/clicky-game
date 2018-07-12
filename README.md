# clicky-game

The game!  It works!  This is my first React project.

I themed my game around Bojack Horseman!

![alt text](https://i.imgur.com/R8gNHkG.jpg "Bojack Horseman")

The game is simple, click an image once to get points, but don't click an image more than one time or you lose your score.  The top score keeps track of...well..your top score.  Everytime you click on a card, the board reshuffles.

I kept track of characters / cards info in a JSON.  I created a new component called Card that displays the image and has a click handler.  Most of the magic is in the App.js.  The JSON for the info is loaded at the mounting, and is shuffled after each click.  This is handled by this function:

```javascript
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
```

Then the main meat of the React stuff is done inside of the clickCard which is the function attached to the card component.  This is a bunch of logic that drives our app:

```javascript
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
      this.setState({title: "You've already guessed that one!"})
    } else {
      // Add to the clicked array
      this.setState({
        clickedCardsArray: [...this.state.clickedCardsArray, id]
      })

      // Add to score
      this.setState({score: this.state.score + 1}, this.updateTopScore);
      this.setState({title: "You Guessed Correctly!"})
    }

    this.setState({drawCharactersArray: this.shuffleCharacterArray(characters)})

  }
```

[The app is deployed here on Heroku](https://limitless-coast-75543.herokuapp.com/)
