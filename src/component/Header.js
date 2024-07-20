import React from 'react'

const Header = ({pic}) => {
  return (
    <div className='first-container'>
        <p>WeatherNow: Instant Weather Updates for Your Location</p>
      <img src={pic} alt='' />
      </div>
  )
}

export default Header