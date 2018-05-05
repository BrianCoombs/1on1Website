import React, { Component } from 'react'
const Mailchimp = require('mailchimp-api-js');
const mc = new Mailchimp('1on1Tutoring', '5265796dfdeb31263a5c23cc561941d5-us15');
var request = require('superagent');



class MailingList extends Component {

  constructor(){
    super();
    this.email = ''
    this.auth = "1on1Tutoring:5265796dfdeb31263a5c23cc561941d5-us15"
  }

  update(e){
    this.email = this.refs.input.value;
  }

  addToMailList = async () => {
    const body = {
      email_address: 'purahmanian@gmail.com',
      status: 'subscribed'
    };
    var endpoint = 'https://us15.api.mailchimp.com/3.0/lists/f403e6a812/members';
    var req = request(endpoint, function(error, response, body){
      console.log('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.log('body:', body); // Print the HTML for the Google homepage.
      alert("hi");
    })
          .set('content-type', 'application/json')
          .auth('1on1Tutoring', '5265796dfdeb31263a5c23cc561941d5-us15', false);

    req.send(body);
/*


      const response = await fetch('/api/mailchimp');

      console.log(response);
      alert(response);
      const body = await response.json();


      if (response.status !== 200) throw Error(body.message);




      onSubmit={this.addToMailList.bind(this)}

*/


  }

  render() {
    return (
      
      <div>
        <h1>Join Our Mailing List</h1>
        <div class="mailingList">

          <br/>

          <p class="mailing">For discounts and free tutoring updates, we promise we hate spam as much as you do.</p>

          <form id="hello" action="/api/mailchimp" method="POST"  >


            <input
              ref="input"
              type="text"
              name="email"
              id="email"
              //addToMailList = {this.addToMailList.bind(this))}
              class="emailInput"
            />
            <input class="emailSubmit" type="submit" value="Submit"/>

          </form>

        </div>
      </div>
    );
  }
}

export default MailingList;
