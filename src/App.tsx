import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  // tuple
  let aTuple: [string, number] = ["hello", 35];
  // enum
  enum codes {
    first = 1,
    second
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The value {codes.first} is of {typeof codes} type!
        </p>
      </header>
    </div>
  );
}

export default App;
