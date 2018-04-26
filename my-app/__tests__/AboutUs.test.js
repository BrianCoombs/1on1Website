import React from 'react'
import { configure, shallow } from 'enzyme'
import AboutUs from '../src/components/AboutUs'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'

configure({adapter: new Adapter()});

it('renders correctly', () => {
  const component = shallow(
    <AboutUs />
  );
  expect(toJson(component)).toMatchSnapshot();
});

/**
test('AboutUs component should render as expected', () => {
  const component = shallow(<AboutUs />)
  console.log(component)

});*/
