import React, { Component } from 'react'

import Login from './login';
import Nav from './nav';

export default class page extends Component {
  render() {
    return (
      <div className='flex flex-col w-screen h-screen'>
        <Nav/>
        <Login/>
      </div>
    )
  }
}
