import React, { Component } from 'react'
//import axios from 'axios'
//import curl from 'curl'

class MailingList extends Component {

  constructor(){
    super();
    this.email = ''
    this.auth = "1on1Tutoring:5265796dfdeb31263a5c23cc561941d5-us15"
  }

  update(e){
    this.email = this.refs.input.value;
  }

  addToMailList() {
    //event.preventDefault();

    //curl.post('https://us16.api.mailchimp.com/3.0/lists/f403e6a812/members',{email_address:"purahmanian@gmail.com", status:"subscribed"});

/*

    axios.post(`https://1on1Tutoring:5265796dfdeb31263a5c23cc561941d5-us15@us16.api.mailchimp.com/3.0/lists/f403e6a812/members`, {
      email_address: 'purahmanian@gmail.com',
      status: 'subscribed'
    })
    .then(function (response) {
      console.log(response);
      alert("response:\n" + response);
    })
    .catch(function (error) {
      console.log(error);
      alert("error:\n" + error);
    });


    axios({
      url:'https://us16.api.mailchimp.com/3.0/lists/f403e6a812/members',
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        email_address: this.email,
        status: "subscribed",
      }),
      auth: {
        'user': '1on1Tutoring',
        'pass': '5265796dfdeb31263a5c23cc561941d5-us15'
      }
    })

    axios({
      url: 'https://usX.api.mailchimp.com/3.0/lists/f403e6a812/members',
      user: '1on1Tutoring:5265796dfdeb31263a5c23cc561941d5-us15',
      header: 'content-type: application/json',
      data: user
    }).then(res => {
       console.log(res);
       console.log(res.data);
     })*/

  }

  render() {
    return (
      <div>
        <h1>Join Our Mailing List</h1>
        <div class="mailingList">

          <br/>

          <p class="mailing">For discounts and free tutoring updates, we promise we hate spam as much as you do.</p>

          <form id="hello" action="" onSubmit={this.addToMailList.bind(this)} >
            <input
              ref="input"
              onChange={this.update.bind(this)}
              //addToMailList = {this.addToMailList.bind(this))}
              class="emailInput" type="text" name="emailAddress"
            />{this.email}
            <input class="emailSubmit" type="submit" value="Submit"/>

          </form>

        </div>
      </div>
    );
  }
}

export default MailingList;
