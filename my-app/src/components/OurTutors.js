import React, { Component } from 'react'
import { render } from 'react-dom';
import Radium from "radium";

class OurTutors extends Component {

  render() {
    return (
      <div class="tutorsBg">
        <br/>
        <h1 id="ourtutors">Our Tutors</h1>
        <div class="tutors">
          <div class="tutorPhoto">
            <img src="https://pbs.twimg.com/media/BhxWutnCEAAtEQ6.jpg:large" alt="Tutor photo"></img>
            <p>Tutors 2018</p>
          </div>
          <div key="1" class="tutor">Top 5%</div>
          <div key="2" class="tutor">Trained and selected for <br />their expertise in a subect</div>
          <div key="3" class="tutor">From your school and <br />know its teachers</div>
          <div key="4" class="tutor">Passionate about teaching and <br />mentoring their younger peers</div>
        </div>
        <br/>
      </div>
    );
  }
}
/**
const styles = {
  tutorText: {
    color: "white",
    ':hover': {
      textDecoration: "none",
      color: "gray",
    },
  },
};*/

/** Hover code
<div key="1" style={styles.tutorText} class="tutor">Top 5%</div>
<div key="2" style={styles.tutorText} class="tutor">Trained and selected for <br />their expertise in a subect</div>
<div key="3" style={styles.tutorText} class="tutor">From your school and <br />know its teachers</div>
<div key="4" style={styles.tutorText} class="tutor">Passionate about teaching and <br />mentoring their younger peers</div>
*/

export default OurTutors;
