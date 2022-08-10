import React from 'react'
import PropTypes from 'prop-types'

export const Filter = ({ value }) => {

  return (
    <div>
      <input
        type='text'
        placeholder='Find contact'
        value={value}
        onChange={(event) => console.log(event.target.value)}
      />

    </div>
  )
}
