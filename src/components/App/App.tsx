import React, { FC } from "react";

import CardsList from "../CardsList/CardsList";
import Filter from "../Filter/Filter";
import Header from "../Header/Header";

import "./App.css";

const App: FC = () => {
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
};

export default App;
