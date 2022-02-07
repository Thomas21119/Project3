const { Schema, model } = require('mongoose');

const eventSchema = new Schema({
  eventType: {
    type: String,
    required: true,
  },
  eventName: {
    type: String,
    required: true,
  },
  eventDescription: {
    type: String,
  },
  eventRepeat: {
    type: String,
    required: true,
  },
  eventTime: {
    type: String,
    required: true,
  },
});

const Event = model('Event', eventSchema);

module.exports = Event;
