import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { useQuery } from '@apollo/client';
import { QUERY_USER_EVENTS } from '../utils/queries';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

import './calender.css';

const localizer = momentLocalizer(moment);

const myEventsList = [];

const reactCalender = (prop) => (
  <div className="reactCalender">
    <Calendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
    />
  </div>
);

const createItem = (args) => {
  window.location.assign('/additem');
};

const Calender = () => {
  const { data } = useQuery(QUERY_USER_EVENTS);
  console.log(data);
  data.userEvents.events.pop();
  if (data) {
    data.userEvents.events.map((event, key) => {
      // let type = event.eventType;
      // let repeating = event.eventRepeating;
      let name = event.eventName;
      let year = event.eventYear;
      let month = event.eventMonth;
      let day = event.eventDay;
      let hour = event.eventHour;
      let minute = event.eventMinute;
      const newObject = {
        title: name,
        start: new Date(year, month - 1, day, hour, minute, 0, 0),
        end: new Date(year, month - 1, day, hour, minute, 0, 0),
        key: key,
      };
      return myEventsList.push(newObject);
    });
  } else {
    console.log('no Data');
  }
  return (
    <div className="calender">
      {reactCalender()}
      <button onClick={createItem} className="addItemBtn">
        {' '}
        Add Item{' '}
      </button>
    </div>
  );
};

export default Calender;
