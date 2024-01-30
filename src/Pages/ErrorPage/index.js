import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import './Error.css'

const Error = () => {
  return (
    <div className='container'>
      <div>
        <h1>Oops!</h1>
        <h2>
          404 Not Found</h2>
        <div class="error-details">
          Sorry, an error has occured, Requested page not found!
        </div>
        <div class="error-actions">
          <Link to="/"><button><span> <FaHome /></span>Take Me Home </button> </Link>
        </div>
      </div>
    </div>
  )
}

export default Error
