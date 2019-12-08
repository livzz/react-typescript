import rootReducer from './index'

describe('rootReducer', () => {
  it('intilialize the default state', () => {
    expect(rootReducer({}, {})).toEqual({
      loot: {
        balance: 0
      },
      bitcoin: {
        rate: {}
      }
    })
  })
})