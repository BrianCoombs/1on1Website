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

/** need to test for onClick
not implemented yet */
