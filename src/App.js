import React, { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/cart-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchFilter: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) => this.setState({ monsters: user }));
  }

  searchHandler = (e) => this.setState({ searchFilter: e.target.value });

  render() {
    const { monsters, searchFilter } = this.state;

    const filteredMonster = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchFilter.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monster Me</h1>
        <SearchBox
          placeholder="Search Monster"
          searchHandler={this.searchHandler}
        />
        <CardList monsterList={filteredMonster} />
      </div>
    );
  }
}

export default App;
