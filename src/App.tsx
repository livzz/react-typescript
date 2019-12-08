import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Message from './Message'
import Wallet from './components/wallet'
import Loot from './components/Loot'
import { connect } from 'react-redux'
import { Creators } from './reducer/loot/actions'

interface App {
  debit: Function,
  credit: Function
}

export function App(props: App) {
  const [amount, setAmount] = React.useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Message name="Fron" message="Urgent Message" />
        <Wallet />
        <Loot />
        <div>
          <label htmlFor="inputAmount" style={{ marginRight: 8 }}>Amount</label>
          <input id="inputAmount" value={amount} className='input-amount' onChange={({ target: { value } }) => setAmount(parseInt(value))} />
          <button className="btn-submit debit" onClick={() => props.debit(amount)}>Debit</button>
          <button className="btn-submit credit" onClick={() => props.credit(amount)}>Credit</button>
        </div>
      </header>
    </div>
  );
}

const mapDispatchToProps = (dispatch: Function) => {
  return {
    debit: (amount: Number) => dispatch(Creators.debit(amount)),
    credit: (amount: Number) => dispatch(Creators.credit(amount))
  }
}

export default connect(null, mapDispatchToProps)(App);
