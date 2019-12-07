import React from 'react';
import App from './App';
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('App', () => {
  const app = shallow(<App />)
  // it('renders without crashing', () => {
  //   const div = document.createElement('div');
  //   ReactDOM.render(<App />, div);
  //   ReactDOM.unmountComponentAtNode(div);
  // });
  it('renders properly', () => {
    expect(app).toMatchSnapshot()
  })

  it('contains a wallet component', () => {
    // console.log(app.debug())
    expect(app.find('Connect(Wallet)').exists()).toBe(true)
  })

  it('creates an input to credit or debit from loot', () => {
    expect(app.find('.input-amount').exists()).toBe(true)
  })


  describe('when a user types into the wallet input', () => {
    const lootBalance = 25;
    beforeEach(() => {
      app.find('.input-amount').simulate('change', { target: { value: lootBalance } })
    })
    afterEach(() => {
      jest.clearAllMocks();
    });
    it('updates the local loot balance in `state` and is in number', () => {
      expect(app.find('.input-amount').props().value).toEqual(lootBalance)
    })
  })

});

