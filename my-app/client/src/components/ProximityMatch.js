import React, { Component } from 'react'

class ProximityMatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zip1: "https://maps.googleapis.com/maps/api/geocode/json?address=75025&key=AIzaSyB1s8lN_cd_FhoZYhuguvaQW33zEu31FTQ",
      zip2: "https://maps.googleapis.com/maps/api/geocode/json?address=78705&key=AIzaSyB1s8lN_cd_FhoZYhuguvaQW33zEu31FTQ",
      lat1: '',
      lng1: '',
      lat2: '',
      lng2: '',
      dist: ''
    };
  }

  //var API = {"https://maps.googleapis.com/maps/api/geocode/json?address=" + {this.state.zip1} + "&key=AIzaSyB1s8lN_cd_FhoZYhuguvaQW33zEu31FTQ"};
  //var API2 = {"https://maps.googleapis.com/maps/api/geocode/json?address=" + {this.state.zip2} + "&key=AIzaSyB1s8lN_cd_FhoZYhuguvaQW33zEu31FTQ"};

  degreesToRadians(degrees) {
	   return degrees*Math.PI/180;
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

  handleClick(e) {
    console.log(this.state.lat1)
    console.log(this.state.lng1)
    console.log(this.state.lat2)
    console.log(this.state.lng2)
    var distance = this.distanceBetweenCoords(this.state.lat1, this.state.lng1, this.state.lat2, this.state.lng2)
    this.setState({dist:distance})
    console.log(this.state.dist)
  }

  componentDidMount() {
    fetch(this.state.zip1)
    .then(response => response.json())
    .then(data => this.setState({
      lat1: data.results[0].geometry.location.lat,
      lng1: data.results[0].geometry.location.lng}));
    fetch(this.state.zip2)
    .then(response => response.json())
    .then(data => this.setState({
      lat2: data.results[0].geometry.location.lat,
      lng2: data.results[0].geometry.location.lng}));
  }

  render() {
    const {lat1} = this.state;
    const {lng1} = this.state;
    const {lat2} = this.state;
    const {lng2} = this.state;
    const {dist} = this.state;

    return (
      <div>
        <h1>proximity match dummy code</h1>
        <p>Lat1: {lat1}</p>
        <p>Lng1: {lng1}</p>
        <p>Lat2: {lat2}</p>
        <p>Lng2: {lng2}</p>
        <p>Distance: {dist}</p>
        <button onClick={this.handleClick.bind(this)}>Click me</button>

      </div>
    );
  }
}

export default ProximityMatch;
