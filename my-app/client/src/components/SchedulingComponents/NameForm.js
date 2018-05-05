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
    while(this.state.tutors.length>0){
      this.state.tutors.pop();
    }
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

    if(this.state.zip.length>0){
      acuityRes.sort((a, b) =>
      {
        return this.closerOfTwoZips(a.location.substring(0,5), b.location.substring(0,5), this.state.zip);
      });
    }


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
    if(this.state.zip.length>0){
      while(currTutor < 3){
        for(var i = 0; i<acuityRes.length; i++){
          var tutor = acuityRes[i];
            acuityRes.splice(i, 1);
            this.addTutorToList(currTutor, tutor);
            break;

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

  closerOfTwoZips(zip1, zip2, userZip){
    var API1 = "https://maps.googleapis.com/maps/api/geocode/json?address=" + zip1 + "&key=AIzaSyB1s8lN_cd_FhoZYhuguvaQW33zEu31FTQ";
    var API2 = "https://maps.googleapis.com/maps/api/geocode/json?address=" + zip2 + "&key=AIzaSyB1s8lN_cd_FhoZYhuguvaQW33zEu31FTQ";
    var APIUser = "https://maps.googleapis.com/maps/api/geocode/json?address=" + userZip + "&key=AIzaSyB1s8lN_cd_FhoZYhuguvaQW33zEu31FTQ";
    console.log("Tutor 1 zip:", zip1)
    console.log("Tutor 2 zip:", zip2)
    console.log("User zip", userZip)

    var lat1;
    var lng1;
    var lat2;
    var lng2;
    var userLat;
    var userLng;

    fetch(API1)
    .then(response => response.json())
    .then(data => {
      lat1 = data.results[0].geometry.location.lat;
      lng1 = data.results[0].geometry.location.lng;
      fetch(API2)
      .then(response => response.json())
      .then(data2 =>{
          lat2 = data2.results[0].geometry.location.lat;
          lng2 = data2.results[0].geometry.location.lng;
          fetch(APIUser)
          .then(response => response.json())
          .then(data3 =>{
              userLat = data3.results[0].geometry.location.lat;
              userLng = data3.results[0].geometry.location.lng;
              var dist1 = this.distanceBetweenCoords(lat1, lng1, userLat, userLng);
              var dist2 = this.distanceBetweenCoords(lat2, lng2, userLat, userLng);

              if(parseFloat(dist1)>parseFloat(dist2)){
                console.log("DIST 1 > DIST 2")
                console.log("dist 1", dist1)
                console.log("dist 2", dist2)
                return -1;
              }else{
                console.log("DIST 1 <= DIST 2")
                console.log("dist 1", dist1)
                console.log("dist 2", dist2)
                return 1;
              }
          });
      });
    });

/**
    fetch(API2)
    .then(response => response.json())
    .then(data =>{
        lat2 = data.results[0].geometry.location.lat;
        lng2 = data.results[0].geometry.location.lng;
    });
    fetch(APIUser)
    .then(response => response.json())
    .then(data =>{
        userLat = data.results[0].geometry.location.lat;
        userLng = data.results[0].geometry.location.lng;
    });

    var dist1 = this.distanceBetweenCoords(lat1, lng1, userLat, userLng);
    var dist2 = this.distanceBetweenCoords(lat2, lng2, userLat, userLng);
    if(dist1>dist2){
      return true;
    }else{
      return false;
    }*/

  }

  distanceBetweenCoords(lat1, lng1, lat2, lng2) {
    var earthRadiusKm = 6371;

    var dLat = this.degreesToRadians(parseFloat(lat2)-parseFloat(lat1))
    var dLng = this.degreesToRadians(parseFloat(lng2)-parseFloat(lng1))

    var lat1F = this.degreesToRadians(parseFloat(lat1))
    var lat2F = this.degreesToRadians(parseFloat(lat2))

    var a = Math.sin(dLat/2)*Math.sin(dLat/2) + Math.sin(dLng/2)*Math.sin(dLng/2)*Math.cos(lat1F)*Math.cos(lat2F)
    var c = 2*Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
    return earthRadiusKm*c
  }

  degreesToRadians(degrees) {
     return degrees*Math.PI/180;
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
