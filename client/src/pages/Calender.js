import React, { useMemo } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { useQuery } from '@apollo/client';
import { QUERY_USER_EVENTS } from '../utils/queries';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

import './calender.css';

const localizer = momentLocalizer(moment);

const ReactCalender = ({ muEvents }) => (
  <div className="reactCalender">
    <Calendar
      localizer={localizer}
      events={muEvents}
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

  const muEvents = useMemo(() => {
    return (
      data?.userEvents?.events.map(
        (
          {
            eventName: name,
            eventYear: year,
            eventMonth: month,
            eventDay: day,
            eventHour: hour,
            eventMinute: minute,
          },
          key
        ) => {
          return {
            title: name,
            start: new Date(year, month - 1, day, hour, minute, 0, 0),
            end: new Date(year, month - 1, day, hour, minute, 0, 0),
            key: key,
          };
        }
      ) || []
    );
  }, [data]);

  return (
    <div className="calender">
      <ReactCalender muEvents={muEvents} />
      <button onClick={createItem} className="addItemBtn">
        {' '}
        Add Item{' '}
      </button>
    </div>
  );
};

export default Calender;
