import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <strong>Dictionary App</strong>
        </header>
        <br />
        <main>
          <Dictionary />
        </main>
        <small>
          <footer className="App-footer">Coded by Calysta Aponte</footer>
        </small>
      </div>
    </div>
  );
}

export default App;
