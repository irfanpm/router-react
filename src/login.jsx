import React from 'react'
import { Link } from 'react-router-dom'


function login() {
  return (
    <div className='log'>
      <h1>login page</h1>
      <form action="">

        <label htmlFor="">Email</label>&nbsp;
        <input type="email" name="" id="" /><br /><br />
        <label htmlFor="">password</label>&nbsp;
        <input type="password" name="" id="" /><br /><br />
      </form>
      <button className='btn'><Link to='/home'>login</Link></button> &nbsp;&nbsp;
      <button className='btn'><Link to='/'>Register</Link></button>

    </div>
  )
}

export default login
