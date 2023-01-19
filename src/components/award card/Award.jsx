import React from 'react'
import { Link } from 'react-router-dom'

const Award = () => {
  return (
    <div className='award-award'>
      <img src='' alt='' />

      <div>
        <h3>Award name</h3>
        
        <h5>
          <span>Issued By:</span>
          <span>name of issuerer</span>
        </h5>

        <Link to="#">View it here</Link>
      </div>
    </div>
  )
}

export default Award