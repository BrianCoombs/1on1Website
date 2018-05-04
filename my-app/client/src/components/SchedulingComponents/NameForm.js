import React, { Component } from 'react'
import AllSchedules from './AllSchedules'
import acuityscheduling from 'acuityscheduling'
import ProximityMatch from '../ProximityMatch'
const request = require('request');

export default class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: '',
      zip: '',
      name: '',
      schedulesHidden: false,
      tutors : [3]
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
    //this.clearList;
    var currTutor = 0;
    //Check name first
    if(this.state.name.length>0){
      for(var i = 0; i < acuityRes.length; i++) {
        var tutor = acuityRes[i];
        if(tutor.name.toUpperCase().includes(this.state.name.toUpperCase())){
          acuityRes.splice(i, 1);
          this.addTutorToList(currTutor, tutor);
          currTutor++;
          break;
        }
      }
    }

    // return true if a > b
/**
    if(this.state.zip.length>0){
      acuityRes.sort((a, b) =>
      {
        var zipTutor1 = a.location.substring(0,4);
        var zipTutor2 = b.location.substring(0,4);
        var zipUser = this.state.zip;
        <div>
          <ProximityMatch zip1={zipTutor1} zip2={zipUser}/>
          <ProximityMatch zip1={zipTutor2} zip2={zipUser}/>
        </div>
      }
    }*/


    if(this.state.subject.length>0){
      while(currTutor < 3){
        for(var i = 0; i<acuityRes.length; i++){
          var tutor = acuityRes[i];
          if(tutor.description.toUpperCase().includes(this.state.subject.toUpperCase())){
            acuityRes.splice(i, 1);
            this.addTutorToList(currTutor, tutor);
            break;
          }
        }
        currTutor++
      }
    }
  }

  addTutorToList(currTutor, tutor) {
    var tempTutors = this.state.tutors;
    var newTutor = {name:tutor.name, url:('https://app.acuityscheduling.com/schedule.php?owner=13918864&calendarID=' + tutor.id)};
    tempTutors[currTutor] = newTutor;
    this.setState({
      tutors : tempTutors
    });
  }

  clearList() {
    var tempTutors = [3];
    this.setState({
      tutors : tempTutors
    });
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
