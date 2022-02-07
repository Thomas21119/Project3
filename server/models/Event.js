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
  eventRepeating: {
    type: String,
    required: true,
  },
  eventYear: {
    type: Number,
    required: true,
  },
  eventMonth: {
    type: String,
    required: true,
  },
  eventDay: {
    type: Number,
    required: true,
  },
  eventHour: {
    type: Number,
    required: true,
  },
  eventMinute: {
    type: Number,
    required: true,
  },
  userId: {
    type: Number,
    required: true,
  },
});

const Event = model('Event', eventSchema);

module.exports = Event;
