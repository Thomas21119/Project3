import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

const AddItem = () => {
  const [formState, setFormState] = useState({
    eventType: 'Class',
    eventName: '',
    eventRepeating: 'Just Once',
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(value);
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    if (formState.eventName === '') {
      return console.log('please enter a valid string');
    }
  };
  return (
    <div>
      <h2> Add to Calender </h2>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="eventType"> What Type of event is it </label>
        <select name="eventType" id="eventType" onChange={handleChange}>
          <option value="Class"> Class </option>
          <option value="Homework"> Homework </option>
          <option value="Assignment"> Assignment </option>
          <option value="Personal"> Personal </option>
        </select>

        <label htmlFor="eventName"> What will the event be named </label>
        <input
          type="text"
          name="eventName"
          placeholder="Psychology homework"
          onChange={handleChange}
        />

        <label htmlFor="eventDescription"> Optional Event Description </label>
        <input
          type="text"
          name="eventDescription"
          placeholder="very hard homework"
          onChange={handleChange}
        />

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

        <input type="submit" />
      </form>
    </div>
  );
};

export default AddItem;
