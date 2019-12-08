import React from 'react';
import { mount, shallow, configure } from 'enzyme';
import { Loot } from './Loot'
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Loot', () => {
  const mockFetchBitcoin = jest.fn()
  const props = { balance: 10, bitcoin: { rate: { bpi: { USD: { rate: 999 } } } } }
  let loot = shallow(<Loot {...props} />)

  it('renders properly', () => {
    expect(loot).toMatchSnapshot();
  })

  describe('when Mounted', () => {
    beforeEach(() => {
      props.fetchBitcoin = mockFetchBitcoin;
      loot = mount(<Loot {...props} />)
    })

    it('Dispatches the fetchBitcoin() method it received from props', () => {
      expect(mockFetchBitcoin).toHaveBeenCalled()
      expect(mockFetchBitcoin).toHaveBeenCalledTimes(1)
    })

  })

})