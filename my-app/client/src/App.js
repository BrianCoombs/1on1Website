import React, { Component } from 'react';
import { render } from 'react-dom';
import Radium from "radium";
import './Style.css';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Jumbotron, Button } from 'react-bootstrap';

import NavigationBar from './components/NavigationBar'
import HomeScreen from './components/HomeScreen'
import ScheduleTutor from './components/ScheduleTutor'
import AboutUs from './components/AboutUs'
import OurStory from './components/OurStory'
import OurTutors from './components/OurTutors'
import Testimonials from './components/Testimonials'
import Philanthropy from './components/Philanthropy'
import MailingList from './components/MailingList'

class App extends Component {

  render() {
    return (
      <div className="App">
        <div>
          <NavigationBar />
        </div>

        <div>
          <HomeScreen />
        </div>

        <div>
          <ScheduleTutor />
        </div>

        <div>
          <AboutUs />
        </div>

        <div>
          <OurStory />
        </div>

        <div>
          <OurTutors />
        </div>

        <div>
          <Testimonials />
        </div>

        <div>
          <Philanthropy />
        </div>

        <div>
          <MailingList />
        </div>

      </div>
    );
  }
}

export default Radium(App);
