import React from 'react';
import { connect } from 'react-redux';
import { fetchHandler } from '../reducer/bitcoin/reducers';

interface Loot {
  loot: Number,
  bitcoin: any,
  fetchBitcoin: Function
}

export const Loot = (props: Loot) => {
  React.useEffect(() => {
    props.fetchBitcoin()
  }, [])
  return (
    <div>
      <h3>Loot</h3>
      {props.bitcoin.rate.bpi && props.bitcoin.rate.bpi.USD.rate}
    </div>
  )
}

const mapStateToProps = (state: any) => {
  return {
    loot: state.loot,
    bitcoin: state.bitcoin
  }
}

const mapDispatchtoProps = (dispatch: Function) => {
  return {
    fetchBitcoin: () => fetchHandler()(dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchtoProps)(Loot)