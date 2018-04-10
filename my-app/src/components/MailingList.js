import React, { Component } from 'react'

class MailingList extends Component {

  render() {
    return (
      <div>
        <h1>Join Our Mailing List</h1>
        <div class="mailingList">
          <br/>
          <p class="mailing">For discounts and free tutoring updates, we promise we hate spam as much as you do.</p>
          <form action="">
            <input class="emailInput" type="text" name="emailAddress"/>
            <input class="emailSubmit" type="submit" value="Submit"/>
          </form>
        </div>
      </div>
    );
  }
}

export default MailingList;
