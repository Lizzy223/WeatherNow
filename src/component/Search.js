import React from 'react'

const Search = ({country, setCountry,error}) => {
  return (
    <div className='inputContainer'>
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder='Enter a location'
        />
        <p className='error'>{error&&<>&#x1F6C8;</>} {error}</p>
      </div>
  )
}

export default Search