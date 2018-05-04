import React, { Component } from 'react'
import acuityscheduling from 'acuityscheduling'

class Schedule extends Component {
  constructor(props){
    super(props);
    this.state = {
      web: props.url,
      name: props.name

    };
  }


  render() {
    return(
      <div>
        <h3>{this.state.name}</h3>
        <iframe src={this.state.web} width="50%" height="200" frameBorder="0"></iframe>
        <script src="https://d3gxy7nm8y4yjr.cloudfront.net/js/embed.js" type="text/javascript"></script>
      </div>
    );
  }
}
export default Schedule;
