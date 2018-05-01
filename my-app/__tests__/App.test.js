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

it('check integration of components', () => {
  const component = shallow(
    <App />
  );
  expect(component.find("NavigationBar")).toHaveLength(1);
  expect(component.find("HomeScreen")).toHaveLength(1);
  expect(component.find("ScheduleTutor")).toHaveLength(1);
  expect(component.find("AboutUs")).toHaveLength(1);
  expect(component.find("OurStory")).toHaveLength(1);
  expect(component.find("OurTutors")).toHaveLength(1);
  expect(component.find("Testimonials")).toHaveLength(1);
  expect(component.find("Philanthropy")).toHaveLength(1);
  expect(component.find("MailingList")).toHaveLength(1);

});