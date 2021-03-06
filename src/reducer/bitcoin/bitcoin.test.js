// https://api.coindesk.com/v1/bpi/currentprice.json

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { Creators, Types } from './actions'
import reducers, { fetchHandler } from './reducers'

const createMockStore = configureMockStore([thunk]);
const store = createMockStore({ bitcoin: {} });

const mockResponse = { body: { bpi: 'bitcoin price index' } };
fetchMock.get('https://api.coindesk.com/v1/bpi/currentprice.json', mockResponse)

it('create an async action to fetch the bitcoin value', () => {
  const expectedAction = [{ type: Types.SET, rate: mockResponse.body }]
  store.dispatch(fetchHandler()).then(() => {
    expect(store.getActions()).toEqual(expectedAction)
  })
})

it('stores the bitcoin rate', () => {
  const bitcoinData = { bpi: 99 }
  expect(reducers(undefined, Creators.set(bitcoinData))).toEqual({ rate: bitcoinData })
})