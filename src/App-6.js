import React, { Component } from 'react'
import PropTypes from "prop-types";

export default class App extends Component {
  render() {
    return (
      <div>
        <ParentMovie />
      </div>
    );
  }
}
class ParentMovie extends Component {
  state = {
    movieListArray: [],
    movieValue: "",
  };
  handleOnChange = (event) => {
    this.setState({
      movieValue: event.target.value,
    });
  };
  handleOnClick = (event) => {
    let movieListArray = [
      ...this.state.movieListArray,
      {
        id: this.state.movieListArray.length + 1,
        movie: this.state.movieValue,
      },
    ];
    this.setState({
      movieListArray: movieListArray,
      movieValue: "",
    });
  };
  render() {
    return (
      <div style={style.divStyle}>
        <input
          type="text"
          name="movieValue"
          value={this.state.movieValue}
          onChange={this.handleOnChange}
        />
        <br />
        <br>

        </br>
        <button onClick={this.handleOnClick}>Submit</button>

        <br />

        <p>From the State</p>
        {this.state.movieListArray.map((item, index) => {
        return <div key ={index}>{item.movie}</div>
        })}

        <p>From the child and props</p>
        <ChildMovie
          name={"Child 1"}
          movieListArray={this.state.movieListArray}
        />
      </div>
    );
  }
}

function ChildMovie(props) {
  console.log(props);
  return (
    <div>
      {" "}
      {props.movieListArray.map((item, index) => {
        return <div key={index}>{item.movie}</div>;
      })}
    </div>
  );
}
ChildMovie.propTypes = {
  movieListArray: PropTypes.array,
  name: PropTypes.string,
  number: PropTypes.number,
};

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
