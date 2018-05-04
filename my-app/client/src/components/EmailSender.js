import React, { Component } from 'react'

class EmailSender extends Component {

  var mailingList = new Set();

  formRequest(email) {
    mailingList.add(email);
  }

  sendEmails() {

    for (let email of mailingList) {
      //TODO: send email
    }

//    var it = mailingList.entries();
//    var done = false;
//    while (!done) {
//      var itObj = it.next();
//      var email = itObj.value;
//      //send email
//      done = itObj.done;
//    }
  }


}