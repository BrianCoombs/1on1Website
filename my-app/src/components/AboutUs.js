import React, { Component } from 'react'

class AboutUs extends Component {

  render() {
    return (
      <div class="aboutUsBg" id="aboutus">
        <br/>
        <h1 >About Us</h1>
        <section id="aboutus">
        <div class="aboutUs">
          <br/>
          <p align="center">1on1 Tutoring is In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.</p>
          <div class="box">
            <img src="/img/checklist.jpeg" />
            <h4>Prepared</h4>
            <p>
              In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.
            </p>
          </div>
          <div class="box">
            <img src="AboutUs/test.png" />
            <h4>Consistent</h4>
            <p>
              In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.
            </p>
          </div>
          <div class="box" >
            <img src="/img/bulb.png" />
            <h4>Efficient</h4>
            <p>
              In mattis elit vitae odio posuere, nec maximus massa varius. Suspendisse varius volutpat mattis. Vestibulum id magna est.
            </p>
          </div>
        </div>
        </section>
      </div>
    );
  }
}

export default AboutUs;
