import React, { useState } from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './addItem.css';

import { ADD_EVENT } from '../utils/mutations';
import { useMutation } from '@apollo/client';

const AddItem = () => {
  const calenderArray = [];
  const [addEvent] = useMutation(ADD_EVENT);

  const [formState, setFormState] = useState({
    eventType: 'Class',
    eventName: '',
    eventDescription: '',
    eventRepeating: 'Just Once',
    eventYear: 1922,
    eventMonth: 1,
    eventDay: 1,
    eventHour: 1,
    eventMinute: 1,
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleNumberChange = (event) => {
    const { name, value } = event.target;
    const numberValue = Number(value);
    setFormState({
      ...formState,
      [name]: numberValue,
    });
  };

  const handleMonthChange = (event) => {
    const { name, value } = event.target;
    const splitValue = value.split('/')[0];
    const numberValue = Number(splitValue);
    setFormState({
      ...formState,
      [name]: numberValue,
    });
  };

  const loopYear = () => {
    let year = new Date().getFullYear();
    let yearArray = [];
    for (let i = year - 100; i < year + 100; i++) {
      yearArray.push(i);
    }
    return (
      <div>
        <label for="eventYear"> Year: </label>
        <select name="eventYear" id="eventYear" onChange={handleNumberChange}>
          {yearArray.map((element, key) => (
            <option value={element} key={key}>
              {element}
            </option>
          ))}
        </select>
      </div>
    );
  };

  const monthSelect = () => {
    const months = [
      '1/January',
      '2/Febuary',
      '3/March',
      '4/April',
      '5/May',
      '6/June',
      '7/July',
      '8/August',
      '9/September',
      '10/October',
      '11/November',
      '12/December',
    ];
    return (
      <div>
        <label for="eventMonth"> Month: </label>

        <select onChange={handleMonthChange} id="eventMonth" name="eventMonth">
          {months.map((element, key) => (
            <option value={element} key={key}>
              {element}
            </option>
          ))}
        </select>
      </div>
    );
  };

  const daySelect = () => {
    const dayArray = [];
    for (let i = 1; i < 32; i++) {
      dayArray.push(i);
    }
    return (
      <div>
        <label for="eventDay"> Day: </label>
        <select id="eventDay" name="eventDay" onChange={handleNumberChange}>
          {dayArray.map((element, key) => (
            <option value={element} key={key}>
              {element}
            </option>
          ))}
        </select>
      </div>
    );
  };

  const hourSelect = () => {
    const hoursArray = [];
    for (let i = 1; i < 25; i++) {
      hoursArray.push(i);
    }
    return (
      <div>
        <label for="eventHour"> Hour: </label>
        <select id="eventHour" name="eventHour" onChange={handleNumberChange}>
          {hoursArray.map((element, key) => (
            <option value={element} key={key}>
              {' '}
              {element}{' '}
            </option>
          ))}
        </select>
      </div>
    );
  };

  const minuteSelect = () => {
    const minuteArray = [];
    for (let i = 1; i < 61; i++) {
      minuteArray.push(i);
    }
    return (
      <div>
        <label for="eventMinute"> Minute: </label>
        <select
          id="eventMinute"
          name="eventMinute"
          onChange={handleNumberChange}
        >
          {minuteArray.map((element, key) => (
            <option value={element} key={key}>
              {' '}
              {element}{' '}
            </option>
          ))}
        </select>
      </div>
    );
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      addEvent({
        variables: { ...formState },
      });
    } catch (e) {
      console.error(e);
    }
    if (formState.eventName === '') {
      return console.log('please enter a valid string');
    }
    calenderArray.push({
      ...formState,
    });
    console.log(calenderArray);
  };
  return (
    <div className="addItemDiv">
      <h2> Add to Calender </h2>
      <form onSubmit={handleFormSubmit}>
        <div className="areaSection">
          <label htmlFor="eventType"> What Type of event is it: </label>
          <select name="eventType" id="eventType" onChange={handleChange}>
            <option value="Class"> Class </option>
            <option value="Homework"> Homework </option>
            <option value="Assignment"> Assignment </option>
            <option value="Personal"> Personal </option>
          </select>
        </div>

        <div className="areaSection">
          <label htmlFor="eventName"> What will the event be named </label>
          <input
            type="text"
            name="eventName"
            placeholder="Psychology homework"
            onChange={handleChange}
          />
        </div>
        <div className="areaSection">
          <label htmlFor="eventDescription"> Optional Event Description </label>
          <input
            type="text"
            name="eventDescription"
            placeholder="very hard homework"
            onChange={handleChange}
          />
        </div>
        <div className="areaSection">
          <label htmlFor="eventRepeating"> Will the event repeat? </label>
          <select
            name="eventRepeating"
            id="eventRepeating"
            onChange={handleChange}
          >
            <option value="Just Once"> Just Once </option>
            <option value="Daily"> Daily </option>
            <option value="Weekly"> Weekly </option>
            <option value="Fortnightly"> Fortnightly </option>
            <option value="Monthly"> Monthly </option>
            <option value="Yearly"> Yearly </option>
          </select>
        </div>

        <div className="timeSelect">
          <label id="timeLabel"> Time </label>
          {loopYear()}
          {monthSelect()}
          {daySelect()}
          {hourSelect()}
          {minuteSelect()}
        </div>

        <div className="linkSection">
          <a href="/calender" id="calenderLink">
            {' '}
            Return Home{' '}
          </a>
          <input id="addItemSubmit" type="submit" id="calenderSubmitBtn" />
        </div>
      </form>
    </div>
  );
};

export default AddItem;
