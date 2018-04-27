import React from 'react'
import { configure, shallow } from 'enzyme'
import NameForm from '../src/components/SchedulingComponents/NameForm'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import { render } from 'react-dom';

configure({adapter: new Adapter()});

it('should show initial states', () => {
  const component = shallow(
    <NameForm />
  );
  expect(component.state().schedulesHidden).toEqual(false);
});

it('test submit', () => {
  const component = shallow(
    <NameForm />
  );
  expect(component.state().schedulesHidden).toEqual(false);
  component.find('form').simulate('submit', { preventDefault () {} });
  expect(component.state().schedulesHidden).toEqual(true);
});

it('test integration', () => {
  const component = shallow(
    <NameForm />
  );
  expect(component.find("AllSchedules")).toHaveLength(0);
  component.find('form').simulate('submit', { preventDefault () {} });
  expect(component.find("AllSchedules")).toHaveLength(1);
});