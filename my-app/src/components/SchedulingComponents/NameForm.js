import React, { Component } from 'react'

import Schedule from './Schedule'

class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: '',
      zip: '',
      name: '',
      Schedule
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    <Schedule />
    alert('A name was submitted: ' + this.state.name + ' with zip of ' + this.state.zip + ' with requested subject of ' + this.state.subject);
    event.preventDefault();
  }

  render() {
    return (
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
          "Tutor's name (optional):"
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default NameForm;
