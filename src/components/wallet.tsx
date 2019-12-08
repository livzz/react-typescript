import React from 'react';
import { connect } from 'react-redux'

interface Wallet {
  balance: Number
}

export const Wallet = (props: Wallet) => {

  return (
    <div>
      <h3 className="balance">
        Wallet balance: {props.balance}
      </h3>
    </div>
  )
}

const mapStatetoProps = (state: any) => {
  return {
    balance: state.loot.balance
  }
}


export default connect(mapStatetoProps)(Wallet)