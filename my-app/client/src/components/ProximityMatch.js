import React, { Component } from 'react'

const API = 'https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyB1s8lN_cd_FhoZYhuguvaQW33zEu31FTQ';

class ProximityMatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      lat: '',
      lng: ''
    };
  }

/** Calculate straight distance between 2 coordinates
  rad(x) {
    return x * Math.PI / 180;
  }

  getDistance(lat1, lng1, lat2, lng2) {
    var R = 6378137;
    var dLat = rad(lat2 - lat1)
    var dLng = rad(lng2 - lng1)
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(rad(lat1)) * Math.cos(rad(lat2)) * Math.sin(dLng/2) * Math.sin(dLng/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c;
    return d;
  }
*/
/**
  handleFormSubmit(submitEvent) {
    submitEvent.preventDefault();
    var address = this.searchInputElement.value;
    this.setState({searchInputElement: address});
  }

  setSearchInputElementReference(inputReference) {
    this.searchInputElement = inputReference;
  }*/

  componentDidMount() {
    fetch(API)
    .then(response => response.json())
    .then(data => this.setState({
      results: data.results,
      lat: data.results[0].geometry.location.lat,
      lng: data.results[0].geometry.location.lng}));
  }

  render() {
    const { results } = this.state;
    const {lat} = this.state;
    const {lng} = this.state;
    //const {searchInputElement} = this.state;
    //console.log(results[0])
    console.log(lat)
    console.log(lng)
    //console.log(searchInputElement)

    return (
      <div>
        <h1>proximity match dummy code</h1>
        <p>{lat}</p>
        <p>{lng}</p>

      </div>
    );
  }
}

export default ProximityMatch;
