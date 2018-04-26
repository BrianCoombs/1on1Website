import React, { Component } from 'react'

import NameForm from './SchedulingComponents/NameForm'

class ScheduleTutor extends Component {

  render() {
    return (
      <div>
        <h1 id="schedule">Schedule a Tutor</h1>
        < NameForm />
      </div>
    );
  }
}

export default ScheduleTutor;
