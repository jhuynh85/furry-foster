import React from "react";
import "./Search.css";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "",
      location: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log("Searching for " + this.state.type + " near " + this.state.location);
  };

  // Handle changes in location input field
  handleLocationChange = e => {
    this.setState({ location: e.target.value });
    console.log("location: " + e.target.value);
  };

  // Handle changes in dropdown select
  handleSelectChange = e => {
    this.setState({ type: e.target.value });
    console.log(e.target.value + " selected");
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="field has-addons has-addons-centered">
          <p className="control">
            <span className="select is-hover">
              <select onChange={this.handleSelectChange}>
                <option selected disabled>FIND</option>
                <option value="dogs">DOGS</option>
                <option value="cats">CATS</option>
              </select>
            </span>
          </p>
          <p className="control is-expanded">
            <input
              className="input"
              type="text"
              placeholder="NEAR"
              onChange={this.handleLocationChange}
            />
          </p>
          <p className="control">
            <button type="submit" className="button is-warning search-submit-button">
              <span className="icon">
                <i className="fa fa-search" />
              </span>
            </button>
          </p>
        </div>
      </form>
    );
  }
}

export default Search;
