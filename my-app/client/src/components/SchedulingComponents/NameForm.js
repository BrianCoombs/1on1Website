import React, { Component } from 'react'
import AllSchedules from './AllSchedules'
import acuityscheduling from 'acuityscheduling'
const request = require('request');

export default class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: '',
      zip: '',
      name: '',
      schedulesHidden: false,
      tutors : [
        {name: "Neeha", url: 'https://app.acuityscheduling.com/schedule.php?owner=13918864&calendarID=1448052'},
        {name: "Rohith", url: 'https://app.acuityscheduling.com/schedule.php?owner=13918864&calendarID=1448067'},
        {name: "Anuttham", url: 'https://app.acuityscheduling.com/schedule.php?owner=13918864&calendarID=1448061'}
      ]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    //To-do Implement name lookup
    /*
    AllSchedules.setState({
      name:this.state.name
    })
    */

    /*
    request('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', { json: true }, (err, res, body) => {
      if (err) { return console.log(err); }
      alert(body.url);
      alert(body.explanation);
    });
    */
    this.callAcuityApi()
      .then(res =>
        {
          this.findTutors(res);
          alert(JSON.stringify(res, null, '  '));
        }
      )
      .catch(err => console.log(err));

    this.setState({
      schedulesHidden: true
    });

    //alert('A name was submitted: ' + this.state.name + ' with zip of ' + this.state.zip + ' with requested subject of ' + this.state.subject);
    event.preventDefault();
  }

  callAcuityApi = async () => {
    const response = await fetch('/api/acuity');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  findTutors (acuityRes) {
    var currTutor = 0;
    //Check name first
    for(var i = 0; i < acuityRes.length; i++) {
      var tutor = acuityRes[i];
      if(tutor.name.includes(this.state.name)){
        var tempTutors = this.state.tutors;
        tempTutors[currTutor].name = tutor.name;
        tempTutors[currTutor].url = ('https://app.acuityscheduling.com/schedule.php?owner=13918864&calendarID=' + tutor.id);
        this.setState({
          tutors : tempTutors
        });
      }
    }
    //acuityRes.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));

  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Subject Requested:
            <input type="text" name="subject" value={this.state.subject} onChange={this.handleChange} />
          </label>
          <label>
            Zipcode:
            <input type="text" name="zip" value={this.state.zip} onChange={this.handleChange} />
          </label>
          <label>
            Tutor name (optional):
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Search" />
        </form>
        <div>
            { this.state.schedulesHidden ? <AllSchedules tutors={this.state.tutors}/> : null }
        </div>
      </div>
    );
  }
}
