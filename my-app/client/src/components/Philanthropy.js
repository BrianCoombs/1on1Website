import React, { Component } from 'react'

class Philanthropy extends Component {
  constructor() {
    super();
    this.state = {
      event1: "Austin Pets Alive!",
      event2: "Keep Austin Beautiful",
      event3: "American Heart Association",
      event4: "Central Food Bank"
    }
  }

  changeEvent1 = () => {
    this.setState({event1: "5/3/2018"});
  }
  changeEvent2 = () => {
    this.setState({event2: "4/3/2018"});
  }
  changeEvent3 = () => {
    this.setState({event3: "3/3/2018"});
  }
  changeEvent4 = () => {
    this.setState({event4: "2/3/2018"});
  }


  render() {
    return (
      <div class="phil" id="philanthropy">
        <br/><br/><br/>
        <h1>Philanthropy</h1>
        <div class="philan">
          <img class="PhilImg1" src="https://static1.squarespace.com/static/58c88532d2b85703a206095e/t/5a032167652dea555a883b7b/1510154652981/IMG_20170610_201438_804.jpg" alt="YMCA Partner Picture"></img>
          <p class="upcomingEvents">Upcoming Events</p>

          <p class="event1" onClick={this.changeEvent1}>{this.state.event1}</p>
          <img class="eventImage1" src="https://www.austinpetsalive.org/logos/Stacked/APA-stacked-rgb.png" alt="Event Picture"/>
          <p class="event2" onClick={this.changeEvent2}>{this.state.event2}</p>
          <img class="eventImage2" src="https://d3epsxdq52jozs.cloudfront.net/keepaustinbeautiful_3488502613_l.jpg" alt="Event Picture"/>
          <p class="event3" onClick={this.changeEvent3}>{this.state.event3}</p>
          <img class="eventImage3" src="https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/092010/americanheartassociation-converted.gif?itok=6oDBMt4W" alt="Event Picture"/>
          <p class="event4" onClick={this.changeEvent4}>{this.state.event4}</p>
          <img class="eventImage4" src="https://yt3.ggpht.com/a-/AJLlDp2ps7okvrorUDs5p1vymJzrcUVhjPXFlYu7bg=s900-mo-c-c0xffffffff-rj-k-no" alt="Event Picture"/>
        </div>
        <br/><br/><br/>
      </div>
    );
  }
}

export default Philanthropy;
