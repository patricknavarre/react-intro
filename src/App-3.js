import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      movieListArray: [],
      movieValue: "",
    }
  }

  handleOnChange = (event) => {
    this.setState({
      movieValue: event.target.value,
    });
  };
  handleOnSubmit = (event) => {
    let newMovieListArray = [
      ...this.state.movieListArray,
      {
        id: this.state.movieListArray.length + 1,
        movie: this.state.movieValue, //this what we captured from the input
      },
    ];
    this.setState({
      movieListArray: newMovieListArray,
      movieValue: "",
    });
  };

  render() {
    return (
      // <div style={{ textAlign: "center", marginTop: 50 }}>
      <div style={style.divStyle}>
        <input
          type="text"
          name="movieValue"
          onChange={this.handleOnChange}
          value={this.state.movieValue}
        />
        <br />
        <button
          onClick={this.handleOnSubmit}
          type="submit"
          style={style.buttonStyle}
        >
          Submit
        </button>
        <br />
        {/* {this.state.favoriteFoodList.map((item, index) => {
          return <div key={index}>{item.food}</div>;
        })} */}
        <br />
        <AppChild
          item1={"i am item 1"}
          isTrue={true}
          movieListArray={this.state.movieListArray}
        />
      </div>
    );
  }
}

function AppChild(props) {
  console.log(props);
  return (
    <div>
      This is from a Child component
      <br />
      Load data from the parent component
      <br />
      {props.movieListArray.map((item, index) => {
        return <div key={index}>{item.movie}</div>;
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
    backgroundColor: "red",
  },
};


  
  
