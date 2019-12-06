import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Message from './Message'

function App() {
  // tuple
  // let aTuple: [string, number] = ["hello", 35];
  // enum
  // enum codes {
  //   first = 1,
  //   second
  // }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Message message="Urgent Message" />
      </header>
    </div>
  );
}

export default App;
