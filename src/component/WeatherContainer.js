import React from 'react'

const WeatherContainer = ({data, fetched}) => {
  return (
    <div className='weatherContainer'>
        <p>This is {data?.location?.country} </p>
        <p>{data?.location?.name}</p>
        <img className='weatherIcon' src={data?.current?.condition?.icon} alt={data?.current?.condition?.text} />
        <p>{data?.current?.condition?.text}</p>
        <p>{data?.current?.temp_c}{fetched && <>&deg;C</>}</p>
    </div>
  )
}

export default WeatherContainer