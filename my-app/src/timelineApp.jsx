var React = require('react');
var Timeline = require('./Timeline.jsx');


module.exports = React.createClass ({

  getInitialState: function() {
  return {}
  },

  render: function() {
    return (
      <div id="timelineApp">
        <Timeline/>
      </div>
    )
  }
});
