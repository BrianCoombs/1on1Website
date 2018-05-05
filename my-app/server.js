//import express from 'express'
const Mailchimp = require('mailchimp-api-js');
const mc = new Mailchimp('1on1Tutoring', '5265796dfdeb31263a5c23cc561941d5-us15');
var bodyParser = require("body-parser");
var config = require('./acuityConfig');
const express = require('express');
const Acuity = require('acuityscheduling');
var request = require('superagent');

const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get('/api/acuity', (req, res) => {
//app.use(express.static('views'));
var response = res;

  var acuity = Acuity.basic(config);

  acuity.request('/calendars', function (err, res, calendars) {
    if (err) return console.error(err);
    response.send(
      calendars
    );
  });


  //Currently Working
/*
  response.send(
    {
      express: "Hello World!"
    }
  );
*/

});
var mailchimpInstance = 'us15',
  listUniqueId = 'f403e6a812',
  mailchimpApiKey = '5265796dfdeb31263a5c23cc561941d5-us15';

app.post('/api/mailchimp', function (req, res) {
  request
    .post('https://' + mailchimpInstance + '.api.mailchimp.com/3.0/lists/' + listUniqueId + '/members/')
    .set('Content-Type', 'application/json;charset=utf-8')
    .set('Authorization', 'Basic ' + new Buffer('any:' + mailchimpApiKey ).toString('base64'))
    .set({
      'email_address': 'purahmanian@gmail.com',
      'status': 'subscribed'
    })
    .end(function(err, response){
      if(response.status < 300 || (response.status === 400 && response.body.title === "Member Exists")) {
        res.send('Signed Up!');
      }else{
        res.send('Sign Up Failed :(' + response.status + response.body.title + response.body.detail + response.body.errors);
      }
    });

/*
  var response = res;
  var endpoint = 'https://us15.api.mailchimp.com/3.0/lists/f403e6a812/members';
  req = request(http, endpoint)
        .set('content-type', 'application/json')
        .auth('1on1Tutoring', '5265796dfdeb31263a5c23cc561941d5-us15');









  const body = {
    email_address: 'purahmanian@gmail.com',
    status: 'subscribed'
  };

  req.send(body);

*/
  /*
  mc.Members.add('f403e6a812', body).then((res) => {
    response = res;
  }).catch(function (error) {
    console.log(error);
    alert("error:\n" + error);
  });*/

});

app.listen(port, () => console.log(`Listening on port ${port}`));
