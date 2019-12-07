import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Message from './Message'
import Wallet from './components/wallet'

function App() {
  // tuple
  // let aTuple: [string, number] = ["hello", 35];
  // enum
  // enum codes {
  //   first = 1,
  //   second
  // }
  const [amount, setAmount] = React.useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Message name="Fron" message="Urgent Message" />
        <Wallet />
        <div>
          <label htmlFor="inputAmount">Amount</label>
          <input id="inputAmount" value={amount} className='input-amount' onChange={({ target: { value } }) => setAmount(parseInt(value))} />
        </div>
      </header>
    </div>
  );
}

export default App;
