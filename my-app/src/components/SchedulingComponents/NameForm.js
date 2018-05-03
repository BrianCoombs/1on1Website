import React, { Component } from 'react'
import AllSchedules from './AllSchedules'
import acuityscheduling from 'acuityscheduling'


const request = require('request');

//const express = require('express');
//const app = express();
//const Acuity = require('acuityscheduling');

export default class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: '',
      zip: '',
      name: '',
      schedulesHidden: false
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

    request('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', { json: true }, (err, res, body) => {
      if (err) { return console.log(err); }
      alert(body.url);
      alert(body.explanation);
    });

/* Attempt at Express
    app.get('/', function (req, res) {
      const userId = "13918864";
      const apiKey = "25f69d363eda2abc42d5471c13c5d493";
      const acuity = Acuity.basic({
        userId: userId,
        apiKey: apiKey
      });
      acuity.request('/appointments', function (err, res, appointments) {
        if (err) { return console.error(err); }
        alert(appointments);
      });
    });

    app.listen(4000, () => console.log('Example app listening on port 4000!'))
*/
    this.setState({
      schedulesHidden: !(this.state.schedulesHidden)
    })

    //alert('A name was submitted: ' + this.state.name + ' with zip of ' + this.state.zip + ' with requested subject of ' + this.state.subject);
    event.preventDefault();
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
          <input type="submit" value="Submit" />
        </form>
        <div>
            { this.state.schedulesHidden ? <AllSchedules /> : null }
        </div>
      </div>
    );
  }
}
