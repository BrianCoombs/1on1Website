import React, { Component } from 'react'

import NameForm from './SchedulingComponents/NameForm'

class ScheduleTutor extends Component {

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

export default ScheduleTutor;
