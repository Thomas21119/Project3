import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import './header.css';

const Header = () => {
  const classesArray = [];
  const returnClasses = (events) => {
    for (let i = 0; i < events.length; i++) {
      if (events[i].eventType == 'Class') {
        classesArray.push(events[i]);
      }
    }
  };
  return (
    <header>
      <ul>
        {classesArray.map((element, key) => (
          <li key={key}> {element} </li>
        ))}
        <li>
          <a href="/calender">
            <button> Calender </button>
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
