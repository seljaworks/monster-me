import React, { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/card-list/cart-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) => setMonsters(user));
  }, []);

  const searchHandler = (e) => setSearchWord(e.target.value);

  const filteredMonster = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchWord.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Monster Me</h1>
      <SearchBox placeholder="Search Monster" searchHandler={searchHandler} />
      <CardList monsterList={filteredMonster} />
    </div>
  );
};

export default App;
