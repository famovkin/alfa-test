import React from "react";

import CardsList from "../CardsList/CardsList";
import Filter from "../Filter/Filter";
import Header from "../Header/Header";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="app__page">
        <Header />
        <main className="app__main">
          <Filter />
          <CardsList />
        </main>
      </div>
    </div>
  );
}

export default App;
