import React, { Component } from 'react'

import NameForm from './SchedulingComponents/NameForm'

export default class ScheduleTutor extends Component {

  render() {
    return (
      <div class="sched">
        <br/>
        <h1 id="schedule">Schedule a Tutor</h1>
        <br/>
        < NameForm />
        <br/>
      </div>
    );
  }
}
