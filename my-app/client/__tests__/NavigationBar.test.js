import React from 'react'
import { configure, shallow } from 'enzyme'
import NavigationBar from '../src/components/NavigationBar'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import { render } from 'react-dom';

configure({adapter: new Adapter()});

it('test home link', () => {
  const component = shallow(
    <NavigationBar />
  );
  expect(component.find('a').prop('href')).toEqual("#home1");
});

it('test first link', () => {
  const component = shallow(
    <NavigationBar />
  );
  expect(component.find('NavItem').at(0).prop('href')).toEqual("#");
});

it('test second link', () => {
  const component = shallow(
    <NavigationBar />
  );
  expect(component.find('NavItem').at(1).prop('href')).toEqual("#aboutus");
});

it('test third link', () => {
  const component = shallow(
    <NavigationBar />
  );
  expect(component.find('NavItem').at(2).prop('href')).toEqual("#ourstory");
});

it('test fourth link', () => {
  const component = shallow(
    <NavigationBar />
  );
  expect(component.find('NavItem').at(3).prop('href')).toEqual("#testimonials");
});

it('test fifth link', () => {
  const component = shallow(
    <NavigationBar />
  );
  expect(component.find('NavItem').at(4).prop('href')).toEqual("#philanthropy");
});
