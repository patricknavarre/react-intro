import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super();
    // 1. create a state
    this.state = {
      // 2. create an array called bookListArray
      bookListArray: [],
      // 3. create a state called bookValue
      bookValue: "",
    }
  }
// capturing the users input
  handleOnChange = (event) => {
    this.setState({
      bookValue: event.target.value,
    });
  };

  // function for handling the submit button 
  handleOnSubmit = (event) => {
    // creating an array to add users input to
    let newBookListArray = [
      ...this.state.bookListArray,
      {
        id: this.state.bookListArray.length + 1,
        book: this.state.bookValue, // this is what is captured from the users Input
      },
    ];
    this.setState({
      bookListArray: newBookListArray, 
      bookValue: "",
    });
  };

  
  render() {
    return (
      <div style={style.divStyle}>
      {/* 4. create an input to capture the user value */}
        <input 
        type="text"
        name="bookValue"
        onChange={this.handleOnChange}
        value={this.state.bookValue}
        />
        <br />
        {/* 5. create a submit button to submit user value */}
        <button
        onClick={this.handleOnSubmit}
        type="submit"
        style={style.buttonStyle}
        >
        SUBMIT
        </button>
        <br />
        <br />
        {/* render the bookListArray in the child component */}
        <AppChild
        bookListArray={this.state.bookListArray}
        />
      </div>
    );
  }
}

{/* 6. create a child component and pass the bookListArray to the child component */}
function AppChild(props) {
  return (
    <div>
      {props.bookListArray.map((item, index) => {
        return <div key={index}>{item.book}</div>;
      })}
    </div>
  );
}

const style = {
  divStyle: {
    textAlign: "center",
    marginTop: 50,
  },
  buttonStyle: {
    width: 250,
    backgroundColor: "darkgray",
    marginTop: 10,
    borderRadius: 10,
  },
};