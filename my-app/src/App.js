import React, {Component} from 'react';
import './Style.css'

var ReactDOM = require('react-dom');
var timelineApp = require('./timelineApp.jsx');

// date strings go here
const VALUES = ['August 1, 2010', 'June 14, 2017']
class App extends Component {
  state = {value:0, previous:0};

  render() {
    return (
      <div classname="App">
        <h1>One on One Tutoring</h1>
        <h1>Schedule a Tutor</h1>
        <h1>About Us</h1>
        <h1>Our Story</h1>
          function startTimelineApp() {
              ReactDOM.render(<timelineApp/>, document.getElementById("app-container"))
          };

          window.onload = function() {
            startTimelineApp()
          }

        // <section class = "cd-horizontal-timeline">
        //   <div class = "timeline">
        //     <div class = "events-wrapper">
        //       <div class="events">
        //         <ol>
        //           // enter all dates here
        //           <li><a href="#0" data-date="16/01/2014" class="selected"> 16 Jan </a></li>
        //           <li><a href="#0" data-date="28/02/2014"> 28 Feb </a> </li>
        //         </ol>
        //
        //         <span class="filling-line" aria-hidden="true"></span>
        //       </div>
        //     </div>
        //
        //   <ul class="cd-timeline-navigation">
        //     <li><a href="#0" class="prev inactive">Prev</a></li>
        //     <li><a href="#0" class="next">Next</a></li>
        //   </ul>
        // </div>
        //
        //   <div class="events-content">
        //     <ol>
        //       <li class="selected" data-date="16/01/2014">
        //         <h2>TitleofFirstEvent</h2>
        //         <em>January 16, 2014</em>
        //         <p>
        //           Description first
        //         </p>
        //       </li>
        //
        //       <li data-date="28/02/2014">
        //         <h2>TitleofSecondEvent</h2>
        //         <em>February 28, 2014</em>
        //         <p>
        //           Description second
        //         </p>
        //       </li>
        //     </ol>
        //   </div>
        // </section>

        // https://webdesign.tutsplus.com/tutorials/building-a-horizontal-timeline-with-css-and-javascript--cms-28378
        // https://www.npmjs.com/package/react-vertical-timeline-component
        //  https://www.npmjs.com/package/react-horizontal-timeline
        <h1>Our Tutors</h1>
        <h1>Our Clients Testimonials</h1>
        <h1>Philanthropy</h1>
        <h1>Join Our Mailing List</h1>

      </div>

    );
  }
}

export default App;
