import React, { Component } from "react";
import { CardList } from "./components/card-lists/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchText: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({ monsters: users });
      });
  }
  handleChange = (e) => this.setState({ searchText: e.target.value });

  render() {
    const { monsters, searchText } = this.state;
    const filteredmonsters = monsters.filter((mons) =>
      mons.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search Monster"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredmonsters} />
      </div>
    );
  }
}

export default App;
