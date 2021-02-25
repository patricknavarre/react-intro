import React, { Component } from "react";

export default class App extends Component {
  state = {
    isTrue: false,
    name: "",
  };

  toggleButton = () => {

    // the following is bad practice 
    // this.setState({
    //   isTrue: !this.state.isTrue,
    // });


// THIS IS THE PROPER WAY
    this.setState((prevState) => { //prevState = previous State
      console.log(prevState);
      return {
        isTrue: !prevState.isTrue,
        name:  !prevState.isTrue ? "Mighty Hamster" : "Not so Mighty Hamster",
      }

    })

  }

  render() {
    // let tempVar = "I am a false tempVar"

    // if (this.state.isTrue) {
    //   tempVar = "I am a true tempVar"

    // }

    // return (
    //   <div>
    //     {tempVar}
    //   </div>
    // )

    return (
      <div style={{background: this.state.isTrue ? "lightgreen" : "orange" }}>
        {/* {this.state.isTrue ? "I am a true tempVar" : "I am a false tempVar"} */}
        {/* {this.state.isTrue ? this.state.name : "I am a false tempVar"} */}

        <div> the toggle value is: { this.state.isTrue.toString()}</div>
        <div>
          <button onClick={this.toggleButton}>TOGGLE ME</button>
        </div>
        <div>
          {this.state.isTrue ? (
            <span>{this.state.name}</span>
          ) : (
            <span>{this.state.name}</span>
          )}
        </div>
      </div>
    );
  }
}
