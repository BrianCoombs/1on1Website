//import express from 'express'

var config = require('./acuityConfig');
const express = require('express');
const Acuity = require('acuityscheduling');

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/acuity', (req, res) => {

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

app.listen(port, () => console.log(`Listening on port ${port}`));
