import React from 'react'
import { configure, shallow } from 'enzyme'
import OurStory from '../src/components/OurStory'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'

configure({adapter: new Adapter()});

it('renders correctly', () => {
  const component = shallow(
    <OurStory />
  );
  expect(toJson(component)).toMatchSnapshot();
});