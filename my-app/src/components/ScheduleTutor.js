import React, { Component } from 'react'

import NameForm from './SchedulingComponents/NameForm'

export default class ScheduleTutor extends Component {

  render() {
    return (
      <div class="sched" id="schedule">
        <br/>
        <h1>Schedule a Tutor</h1>
        <br/>
        < NameForm />
        <br/><br/><br/>
      </div>
    );
  }
}
