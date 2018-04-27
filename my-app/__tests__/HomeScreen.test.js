import React from 'react'
import { configure, shallow } from 'enzyme'
import HomeScreen from '../src/components/HomeScreen'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'

configure({adapter: new Adapter()});

it('renders correctly', () => {
  const component = shallow(
    <HomeScreen />
  );
  expect(toJson(component)).toMatchSnapshot();
});