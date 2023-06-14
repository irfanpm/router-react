import React from 'react'
import {Link} from 'react-router-dom'


function home() {
  return (
    <div>
      <h1>Home page</h1>
      <button className='btn'><Link to='/login'>logout</Link></button>
    </div>
  )
}

export default home
