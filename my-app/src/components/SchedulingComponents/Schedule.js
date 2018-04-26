import React, { Component } from 'react'

class Schedule extends Component {
  constructor(props){
    super(props);
    this.state = {
      subject: '',
      zip: '',
      name: ''

    };
  }

  render() {
    return(
      <div>
        <iframe src="https://app.acuityscheduling.com/schedule.php?owner=13918864" width="100%" height="800" frameBorder="0"></iframe>
        <script src="https://d3gxy7nm8y4yjr.cloudfront.net/js/embed.js" type="text/javascript"></script>
      </div>
    );
  }
}
export default Schedule;
