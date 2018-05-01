import React from 'react'
import { configure, shallow } from 'enzyme'
import NameForm from '../src/components/SchedulingComponents/NameForm'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import { render } from 'react-dom';

configure({adapter: new Adapter()});

it('onclick submit schedule search', () => {
  const component = shallow(
    <NameForm />
  );
  component.find('submit').at(1).simulate('click');
  expect(component.state().schedulesHidden).toEqual(false);
});
