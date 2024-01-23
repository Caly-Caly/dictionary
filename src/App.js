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
          <footer className="App-footer">
            <span>
              <a
                href="https://github.com/Caly-Caly/dictionary"
                rel="noreferrer"
                target="_blank"
              >
                Open-source code{" "}
              </a>
              by <strong>Calysta Aponte</strong>
            </span>
          </footer>
        </small>
      </div>
    </div>
  );
}

export default App;
