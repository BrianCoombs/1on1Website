import React, {Component} from 'react';
import { render } from 'react-dom';
import Radium from "radium";
import './Style.css'

class App extends Component {
  constructor(props, context){
    super(props, context);
    this.prv = this.prv.bind(this);
    this.nxt = this.nxt.bind(this);
    this.state = {
            page1: true,
            page2: false,
            page3: false,
            page4: false
       }
    console.log('Initializing')
  }
  nxt() {
	if (this.state.page1){
      this.setState({page1:false, page2: true});
	   }
	else if (this.state.page2){
	      this.setState({page2:false, page3: true});
	   }
	else if (this.state.page3){
	      this.setState({page3:false, page4: true});
	   }
  }
  prv() {
	if (this.state.page2){
	      this.setState({page2:false, page1: true});
		}
		else if (this.state.page3){
		      this.setState({page3:false, page2: true});
		}
		else if (this.state.page4){
		      this.setState({page4:false, page3: true});
		}
  }

  render() {
	let page1 = (this.state.page1) ? "block" : "none"
	let page2 = (this.state.page2) ? "block" : "none"
	let page3 = (this.state.page3) ? "block" : "none"
	let page4 = (this.state.page4) ? "block" : "none"
	let button1 = (this.state.page1) ? "none" : "block"
	let button2 = (this.state.page4) ? "none" : "block"
    return (
      <div classname="App">
        <h1>One on One Tutoring</h1>
        <h1>Schedule a Tutor</h1>
        <h1>About Us</h1>
        <h1>Our Story</h1>
        <h1>Our Tutors</h1>
          <div class="tutors">
            <div class="tutorPhoto">
              <img src="https://pbs.twimg.com/media/BhxWutnCEAAtEQ6.jpg:large" alt="Tutor photo"></img>
              <p>Tutors 2018</p>
            </div>
            <div key="1" style={styles.tutorText} class="tutor">Top 5%</div>
            <div key="2" style={styles.tutorText} class="tutor">Trained and selected for <br />their expertise in a subect</div>
            <div key="3" style={styles.tutorText} class="tutor">From your school and <br />know its teachers</div>
            <div key="4" style={styles.tutorText} class="tutor">Passionate about teaching and <br />mentoring their younger peers</div>
          </div>
        <h1>Our Clients Testimonials</h1>
        	<div class="testimonial">
        	    <button style={{display: button1}} class="button button1" onClick={this.prv}><span>Prev </span></button>
        	    <button style={{display: button2}} class="button button2" onClick={this.nxt}><span>Next </span></button>
        	    <p style={{display: page1}} class="review review1">"This place is great!"</p>
                <p style={{display: page1}} class="person person1">-Distinguished Customer</p>
        	    <img style={{display: page1}} class="img1" src="https://images-na.ssl-images-amazon.com/images/M/MV5BMjI0MTg3MzI0M15BMl5BanBnXkFtZTcwMzQyODU2Mw@@._V1_UY317_CR10,0,214,317_AL_.jpg" alt="1-time Oscar winner"/>
        	    <img style={{display: page1}} class="page1" src="https://i.imgur.com/exar0UV.png" alt=""/>
        	    <p style={{display: page2}} class="review review2">"I am Yale Patt!"</p>
                <p style={{display: page2}} class="person person2">-Yale Patt</p>
        	    <img style={{display: page2}} class="img2" src="https://www.ithistory.org/sites/default/files/honor-roll/Yale%20N.%20Patt.jpg" alt="Distinguished professor"/>
        	    <img style={{display: page2}} class="page2" src="https://i.imgur.com/Orw0hDN.png" alt=""/>
        	    <p style={{display: page3}} class="review review3">"3 Michelin Stars"</p>
                <p style={{display: page3}} class="person person3">-Celebrity Chef</p>
        	    <img style={{display: page3}} class="img3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Gordon_Ramsay.jpg/330px-Gordon_Ramsay.jpg" alt="chef"/>
        	    <img style={{display: page3}} class="page3" src="https://i.imgur.com/F0C1rkf.png" alt=""/>
        	    <p style={{display: page4}} class="review review4">"5 stars out of 5"</p>
                <p style={{display: page4}} class="person person4">-Princeton Review</p>
        	    <img style={{display: page4}} class="img4" src="https://i.imgur.com/bYHXqfV.png" alt="stars"/>
        	    <img style={{display: page4}} class="page4" src="https://i.imgur.com/c7agBZW.png" alt=""/>
        	</div>
        <h1>Philanthropy</h1>
          <div class="philanthropy">
            <img class="PhilImg1" src="" alt="YMCA Partner Picture"></img>
            <p class="upcomingEvents">"Upcoming Events"</p>

            <p class="event1"> "This is event 1"</p>
            <img class="eventImage1" src="" alt="Event Picture"/>
            <p class="event2"> "This is event 2"</p>
            <img class="eventImage2" src="" alt="Event Picture"/>
            <p class="event3"> "This is event 3"</p>
            <img class="eventImage3" src="" alt="Event Picture"/>
            <p class="event4"> "This is event 4"</p>
            <img class="eventImage4" src="" alt="Event Picture"/>
          </div>
        <h1>Join Our Mailing List</h1>
          <div class="mailingList">
            <p class="mailing">"For discounts and free tutoring updates, we promise we hate spam as much as you do."</p>
            <form action="">
              <input class="emailInput" type="text" name="emailAddress"/>
              <input class="emailSubmit" type="submit" value="Submit"/>
            </form>
          </div>

      </div>

    );
  }
}

const styles = {
  tutorText: {
    color: "black",
    ':hover': {
      textDecoration: "none",
      color: "gray",
    },
  },
};

export default Radium(App);
