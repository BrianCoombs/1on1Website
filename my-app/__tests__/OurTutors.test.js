import React from 'react'
import { configure, shallow } from 'enzyme'
import OurTutors from '../src/components/OurTutors'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'

configure({adapter: new Adapter()});

it('renders correctly', () => {
  const component = shallow(
    <OurTutors />
  );
  expect(toJson(component)).toMatchSnapshot();
});