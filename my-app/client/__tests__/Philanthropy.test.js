import React from 'react'
import { configure, shallow } from 'enzyme'
import Philanthropy from '../src/components/Philanthropy'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'

configure({adapter: new Adapter()});

it('renders correctly', () => {
  const component = shallow(
    <Philanthropy />
  );
  expect(toJson(component)).toMatchSnapshot();
});