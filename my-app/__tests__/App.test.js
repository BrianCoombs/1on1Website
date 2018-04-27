import React from 'react'
import { configure, shallow } from 'enzyme'
import App from '../src/App'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'

configure({adapter: new Adapter()});

it('renders correctly', () => {
  const component = shallow(
    <App />
  );
  expect(toJson(component)).toMatchSnapshot();
});