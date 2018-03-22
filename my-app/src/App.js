import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import eventInfo from './timelineContents.js'
import HorizontalTimelineContent from '../HorizontalTimeline/HorizontalTimelineContent'
import './Style.css'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value:0, previous:0};
  }

  componentWillMount() {
    this.data = eventInfo.map((events, index) => {
      return ({
        date: events.date,
        component: (
          <div className = 'container' key = {index} >
            <h1> {events.title}</h1>
            <h2> {events.subtitle} </h2>
            <hr />
            <p> {events.content} </p>
            <hr />
          </div>
        )
      });
    });
  }

  render() {
    return (
      <div classname="App">
        <h1>One on One Tutoring</h1>
        <h1>Schedule a Tutor</h1>
        <h1>About Us</h1>
        <h1>Our Story</h1>
          <HorizontalTimelineContent content={this.data} />
        <h1>Our Tutors</h1>
        <h1>Our Clients Testimonials</h1>
        <h1>Philanthropy</h1>
        <h1>Join Our Mailing List</h1>

      </div>

    );
  }
}

export default App;
