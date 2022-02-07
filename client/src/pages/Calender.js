import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { useQuery } from '@apollo/client';
import { QUERY_USER_EVENTS } from '../utils/queries';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

import './calender.css';

const date = new Date();

const y = date.getFullYear();
const m = date.getMonth();
const d = date.getDate();

const localizer = momentLocalizer(moment);

const myEventsList = [
  {
    title: 'b efdihsjkhgfw vbs etdfxh gfc cn mhtfgcvydth fkjh',
    start: new Date(y, m, d, 10, 40, 0, 0),
    end: new Date(y, m, d, 13, 50, 0, 0),
  },
];

const onRecieveInfo = (events) => {
  for (let i = 0; i < events.length; i++) {
    let type = events[i].eventType;
    let title = events[i].eventName;
    let year = events[i].eventYear;
    let month = events[i].eventMonth - 1;
    let day = events[i].eventDay;
    let hour = events[i].eventHour;
    let minute = events[i].eventMinute;
  }
};

const reactCalender = (prop) => (
  <div>
    <Calendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
);

const createItem = (args) => {
  window.location.assign('/additem');
};

const Calender = () => {
  // const [userEvents, { error }] = useQuery(QUERY_USER_EVENTS);
  // console.log(userEvents);

  return (
    <div>
      {reactCalender()}
      <button onClick={createItem}> Add Item </button>
    </div>
  );
};

export default Calender;
