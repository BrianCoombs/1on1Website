var React = require('react');

var timelines;
var eventsMinDistance = 60;
var context;

module.exports = React.createClass ({

  getInitialState: function() {
  return {
    items: [
        {
          myClass: "selected",
          dataDate: "16/01/2014",
          title: "First Timeline Event",
          subtitle: "January 16th, 2014",
          desc: "description of the first event here"
        },
        {
          myClass: "",
          dataDate: "28/02/2014",
          title: "Second Timeline Event",
          subtitle: "February 28th, 2014",
          desc: "description of the second event here"
        },
      ],
    }
  },

  componentDidMount: function() {
    context: this;
    timelines = $('.cd-horizontal-timeline');
    context.initialize(timelines);
  },

  initialize: function(timelines) {
    timelines.each(function() {
      var timelines = $(this),
      timelineComponents = {};

      //cache timeline timeline components
      timelineComponents['timelineWrapper'] = timeline.find('.events-wrapper');
      timelineComponents['eventsWrapper']   = timelineComponents['timelineWrapper'].children('.events');
      timelineComponents['fillingLine']     = timelineComponents['eventsWrapper'].children('.filling-line');
      timelineComponents['timelineEvents']  = timelineComponents['eventsWrapper'].find('a');
      timelineComponents['timelineDates']   = context.parseDate(timelineComponents['timelineEvents']);
      timelineComponents['eventsMinLapse']  = context.minLapse(timelineComponents['timelineDates']);
      timelineComponents['timelineNavigation'] = timeline.find('.cd-timeline-navigation');
      timelineComponents['eventsContent']      = timeline.children('.events-content');

      //assign left position to single events along timeline
      context.setDatePosition(timelineComponents, eventsMinDistance);
      //assign width to timeline
      //var timelineToWidth = context.setTimelineWidth(timelineComponents, eventsMinDistance);

      //initialize, show timeline
    })
  }
})
