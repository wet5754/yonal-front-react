import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'


const InvitedHome = () => {
  return (
    <Link to='./InvitedUser1'>
        <button className = 'btn'>입장하기</button>
    </Link>
  );
}

export default InvitedHome;