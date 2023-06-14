import React from 'react'
import { Link } from 'react-router-dom'

function registration() {
  return (
    <div className='reg'>
      <h1>Register</h1><br />
      <form action="">
        <label htmlFor=""> Name:</label>&nbsp;
        <input type="text" name="" id="" /><br /><br />
        <label htmlFor=""> userName:</label>&nbsp;
        <input type="number" name="" id="" /><br /><br />
        <label htmlFor="">Email</label>&nbsp;
        <input type="email" name="" id="" /><br /><br />
        <label htmlFor="">password</label>&nbsp;
        <input type="password" name="" id="" /><br /><br />
      </form>
      <button className='btn'><Link to='/login'>Register</Link></button>



    </div>
  )
}

export default registration


