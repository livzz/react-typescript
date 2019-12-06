import { Creators, Types } from './actions'
import reducer from './reducer'

describe('Loot Actions', () => {
  it('Creates an action to debit the loot', () => {
    const loot = 99;
    const expectedAction = { type: Types.DEBIT, amount: loot }
    expect(Creators.debit(loot)).toEqual(expectedAction)
  })

  it('Creates an action to credit the loot', () => {
    const loot = 99;
    const expectedAction = { type: Types.CREDIT, amount: loot }
    expect(Creators.credit(loot)).toEqual(expectedAction)
  })

  it('Creates an action to set the loot', () => {
    const loot = 99;
    const expectedAction = { type: Types.SET, amount: loot }
    expect(Creators.set(loot)).toEqual(expectedAction)
  })
})

describe('Loot Reducers', () => {
  it('sets a balance', () => {
    const balance = 99;
    expect(reducer(undefined, Creators.set(balance))).toEqual({ balance })
  })
  it('debit from balance', () => {
    const balance = 100;
    const amount = 99;
    expect(reducer({ balance }, Creators.debit(amount))).toEqual({ balance: balance + amount })
  })
  it('credit from balance', () => {
    const balance = 100;
    const amount = 99;
    expect(reducer({ balance }, Creators.credit(amount))).toEqual({ balance: balance - amount })
  })
})