import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import pix from "./pix.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    pix
  };

  clicked = [0];

  score = 0;

  topscore = 0;

  correctly = "Click an image to get started";

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return this.setState({ array });
  };

  componentWillMount() {
    
    this.shuffleArray(this.state.pix);
  };

  // componentDidMount() {
  //   this.shuffleArray(this.state.pix);
  // };

  doubleClick() {
    this.score = 0;
    this.clicked = [0];
    this.correctly = "You guessed incorrectly";
    console.log("you clicked the same card twice! Game has reset, your score is now 0. score: " + this.score);
    this.shuffleArray(this.state.pix);
  };

  click = id => {

    console.log(this.state.pix);
    //check if the image has already been clicked
    for (var i = 0; i < this.clicked.length; i++) {
      if (this.clicked[i] === id) {
        console.log("this image was already clicked!");
        return this.doubleClick();
      }
    };
    this.clicked.push(id);
    console.log(this.clicked);
    this.score++;
    console.log("score: " + this.score);
    if (this.topscore < this.score) {
      this.topscore = this.score;
    };
    console.log("topscore: " + this.topscore);
    this.correctly = "You guessed correctly";
    this.shuffleArray(this.state.pix);
    // this.render();
    
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title
          score={this.score}
          topscore={this.topscore}
          correctly={this.correctly}
          >Papaya Clicks</Title>
        {this.state.pix.map(pix => (
          <FriendCard
            click={this.click}
            id={pix.id}
            key={pix.id}
            image={pix.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
