import React from 'react'
import { configure, shallow } from 'enzyme'
import Testimonials from '../src/components/Testimonials'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import { render } from 'react-dom';

configure({adapter: new Adapter()});

it('should show initial states', () => {
  const component = shallow(
    <Testimonials />
  );
  expect(component.state().page1).toEqual(true);
  expect(component.state().page2).toEqual(false);
  expect(component.state().page3).toEqual(false);
  expect(component.state().page4).toEqual(false);
});

/** onClick tests */

it('onclick test page2', () => {
  const component = shallow(
    <Testimonials />
  );
  component.find('button').at(1).simulate('click');
  expect(component.state().page1).toEqual(false);
  expect(component.state().page2).toEqual(true);
  expect(component.state().page3).toEqual(false);
  expect(component.state().page4).toEqual(false);
});

it('onclick test page3', () => {
  const component = shallow(
    <Testimonials />
  );
  component.find('button').at(1).simulate('click');
  component.find('button').at(1).simulate('click');
  expect(component.state().page1).toEqual(false);
  expect(component.state().page2).toEqual(false);
  expect(component.state().page3).toEqual(true);
  expect(component.state().page4).toEqual(false);
});

it('onclick test page4', () => {
  const component = shallow(
    <Testimonials />
  );
  component.find('button').at(1).simulate('click');
  component.find('button').at(1).simulate('click');
  component.find('button').at(1).simulate('click');
  expect(component.state().page1).toEqual(false);
  expect(component.state().page2).toEqual(false);
  expect(component.state().page3).toEqual(false);
  expect(component.state().page4).toEqual(true);
});

it('onclick test prev page1', () => {
  const component = shallow(
    <Testimonials />
  );
  component.find('button').at(1).simulate('click');
  component.find('button').at(0).simulate('click');
  expect(component.state().page1).toEqual(true);
  expect(component.state().page2).toEqual(false);
  expect(component.state().page3).toEqual(false);
  expect(component.state().page4).toEqual(false);
});

it('onclick test prev page2', () => {
  const component = shallow(
    <Testimonials />
  );
  component.find('button').at(1).simulate('click');
  component.find('button').at(1).simulate('click');
  component.find('button').at(0).simulate('click');
  expect(component.state().page1).toEqual(false);
  expect(component.state().page2).toEqual(true);
  expect(component.state().page3).toEqual(false);
  expect(component.state().page4).toEqual(false);
});

it('onclick test prev page3', () => {
  const component = shallow(
    <Testimonials />
  );
  component.find('button').at(1).simulate('click');
  component.find('button').at(1).simulate('click');
  component.find('button').at(1).simulate('click');
  component.find('button').at(0).simulate('click');
  expect(component.state().page1).toEqual(false);
  expect(component.state().page2).toEqual(false);
  expect(component.state().page3).toEqual(true);
  expect(component.state().page4).toEqual(false);
});

it('onclick test full page1', () => {
  const component = shallow(
    <Testimonials />
  );
  component.find('button').at(1).simulate('click');
  component.find('button').at(1).simulate('click');
  component.find('button').at(1).simulate('click');
  component.find('button').at(0).simulate('click');
  component.find('button').at(0).simulate('click');
  component.find('button').at(0).simulate('click');
  expect(component.state().page1).toEqual(true);
  expect(component.state().page2).toEqual(false);
  expect(component.state().page3).toEqual(false);
  expect(component.state().page4).toEqual(false);
});


it('onclick test page1 overflow', () => {
  const component = shallow(
    <Testimonials />
  );
  component.find('button').at(0).simulate('click');
  expect(component.state().page1).toEqual(true);
  expect(component.state().page2).toEqual(false);
  expect(component.state().page3).toEqual(false);
  expect(component.state().page4).toEqual(false);
});

it('onclick test page4 overflow', () => {
  const component = shallow(
    <Testimonials />
  );
  component.find('button').at(1).simulate('click');
  component.find('button').at(1).simulate('click');
  component.find('button').at(1).simulate('click');
  component.find('button').at(1).simulate('click');
  component.find('button').at(1).simulate('click');
  component.find('button').at(1).simulate('click');
  component.find('button').at(1).simulate('click');
  component.find('button').at(1).simulate('click');
  component.find('button').at(1).simulate('click');
  component.find('button').at(1).simulate('click');
  expect(component.state().page1).toEqual(false);
  expect(component.state().page2).toEqual(false);
  expect(component.state().page3).toEqual(false);
  expect(component.state().page4).toEqual(true);
});

it('onclick test page4 overflow 2', () => {
  const component = shallow(
    <Testimonials />
  );
  component.find('button').at(1).simulate('click');
  component.find('button').at(1).simulate('click');
  component.find('button').at(1).simulate('click');
  component.find('button').at(1).simulate('click');
  component.find('button').at(1).simulate('click');
  component.find('button').at(1).simulate('click');
  component.find('button').at(0).simulate('click');
  component.find('button').at(1).simulate('click');
  component.find('button').at(1).simulate('click');
  component.find('button').at(1).simulate('click');
  expect(component.state().page1).toEqual(false);
  expect(component.state().page2).toEqual(false);
  expect(component.state().page3).toEqual(false);
  expect(component.state().page4).toEqual(true);
});

it('onclick test random', () => {
  const component = shallow(
    <Testimonials />
  );
  component.find('button').at(1).simulate('click');
  component.find('button').at(1).simulate('click');
  component.find('button').at(0).simulate('click');
  component.find('button').at(1).simulate('click');
  component.find('button').at(1).simulate('click');
  component.find('button').at(0).simulate('click');
  component.find('button').at(0).simulate('click');
  component.find('button').at(1).simulate('click');
  component.find('button').at(1).simulate('click');
  component.find('button').at(0).simulate('click');
  component.find('button').at(0).simulate('click');
  component.find('button').at(0).simulate('click');
  component.find('button').at(0).simulate('click');
  component.find('button').at(1).simulate('click');
  component.find('button').at(1).simulate('click');
  component.find('button').at(0).simulate('click');
  expect(component.state().page1).toEqual(false);
  expect(component.state().page2).toEqual(true);
  expect(component.state().page3).toEqual(false);
  expect(component.state().page4).toEqual(false);
});
