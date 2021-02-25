import React, { Component } from "react";

export default class App extends Component {
  state = {
    isTrue: false,
    name: "",
  };

  toggleButton = () => {
    this.setState((prevState) => {
      console.log(prevState);
      return {
        isTrue: !prevState.isTrue,
        name: !prevState.isTrue
          ? "The ALL MIGHTY Hamster"
          : "The NOT SO mighty Hamster",
      };
    });
  };

  render() {
    return (
      <div style={{ background: this.state.isTrue ? "lightgreen" : "orange" }}>
        <div>THE TOGGLE VALUE IS: {this.state.isTrue.toString()}</div>
        <div>
          <button onClick={this.toggleButton}>TOGGLE ME!</button>
        </div>
        <div>
          {this.state.isTrue ? <span>{this.state.name}</span> : <span>{this.state.name}</span> }
        </div>
      </div>
    );
  }
}
