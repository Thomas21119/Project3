import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
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
    start: new Date(y, m, d, 10, 30, 0, 0),
    end: new Date(y, m, d, 13, 30, 0, 0),
  },
  {
    title: 'b efdihsjkhgfw vbs etdfxh gfc cn mhtfgcvydth fkjh',
    start: new Date(y, m, d, 10, 30, 0, 0),
    end: new Date(y, m, d, 13, 30, 0, 0),
  },
  {
    title: 'b efdihsjkhgfw vbs etdfxh gfc cn mhtfgcvydth fkjh',
    start: new Date(y, m, d, 10, 30, 0, 0),
    end: new Date(y, m, d, 13, 30, 0, 0),
  },
  {
    title: 'b efdihsjkhgfw vbs etdfxh gfc cn mhtfgcvydth fkjh',
    start: new Date(y, m, d, 10, 30, 0, 0),
    end: new Date(y, m, d, 13, 30, 0, 0),
  },
];

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
  return (
    <div>
      {reactCalender()}
      <button onClick={createItem}> Add Item </button>
    </div>
  );
};

export default Calender;
