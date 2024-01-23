import "./App.css";
import Dictionary from "./Dictionary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookBookmark } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <FontAwesomeIcon
            icon={faBookBookmark}
            size="2xl"
            style={{ color: "#008080" }}
          />
        </header>
        <br />
        <main>
          <Dictionary defaultKeyword="twilight" />
        </main>
        <small>
          <footer className="App-footer">Coded by Calysta Aponte</footer>
        </small>
      </div>
    </div>
  );
}

export default App;
