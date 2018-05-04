import React, { Component } from 'react'

import Schedule from './Schedule'

export default class AllSchedules extends Component {
  constructor(props){
    super(props);
    this.state = {
      //Test run with getting 1 name to return a schedule
      tutors : props.tutors
    };
  }

  createSchedule (tutor) {
    return <Schedule url={tutor.url} key={tutor.name} name={tutor.name}/>;
  }

  createSchedules(tutors) {
    return tutors.map(this.createSchedule);
  }

  render() {
    return(
      <div>
         {this.createSchedules(this.state.tutors)}
      </div>
    );
  }
}
