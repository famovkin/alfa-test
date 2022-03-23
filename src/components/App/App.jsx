import "./App.css";
import Header from "../Header/Header";
import Filter from "../Filter/Filter";

function App() {
  return (
    <div className="app">
      <div className="app__page">
        <Header />
        <main className="app__main">
          <Filter />
        {/* <CardsList /> */}
        </main>
      </div>
    </div>
  );
}

export default App;
