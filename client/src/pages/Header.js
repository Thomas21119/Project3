import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import './header.css';

const Header = () => {
  return (
    <header>
      <ul>
        <li> Class 1 </li>
        <li> Class 2 </li>
        <li> Class 3 </li>
        <li> Class 4 </li>
        <li> Class 5 </li>
        <li>
          <button> Calender </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
