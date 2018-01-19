import React from 'react';
import ReactDOM from 'react-dom';
import App, {Login} from './App';
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('Application', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  describe('Login Component', () => {
  
    it('render without throwing an error', () => {
      expect(shallow(<Login />).exists(<form className='login'></form>)).toBe(true)
    })

    it('renders a email input', () => {
      expect(shallow(<Login />).find('#email').length).toEqual(1)
    })
    
    it('renders a password input', () => {
      expect(shallow(<Login />).find('#password').length).toEqual(1)
    })

  })

})
