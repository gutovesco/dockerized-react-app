import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          width="200px"
          height="200px"
          className="App-logo"
          alt="logo"
        />
        <p>This web page is running on 8080</p>
      </header>
    </div>
  );
}

export default App;
