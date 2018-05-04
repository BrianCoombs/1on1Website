import React, { Component } from 'react'

import Schedule from './Schedule'

export default class AllSchedules extends Component {
  constructor(props){
    super(props);
    this.state = {
      //Test run with getting 1 name to return a schedule
      calendars : [
        {name: "Neeha", url: 'https://app.acuityscheduling.com/schedule.php?owner=13918864&calendarID=1448052'},
        {name: "Rohith", url: 'https://app.acuityscheduling.com/schedule.php?owner=13918864&calendarID=1448067'},
        {name: "Anuttham", url: 'https://app.acuityscheduling.com/schedule.php?owner=13918864&calendarID=1448061'}
      ]
    };
  }

  createSchedule (calendar) {
    return <Schedule url={calendar.url} key={calendar.name} name={calendar.name}/>;
  }

  createSchedules(calendars) {
    return calendars.map(this.createSchedule);
  }

  render() {
    return(
      <div>
         {this.createSchedules(this.state.calendars)}
      </div>
    );
  }
}
