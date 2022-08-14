import React from 'react'
import PropTypes from 'prop-types'

export const ContactsListItem = ({
  name,
  number,
  group,
  onDelete,
  onUpdate
}) => (
  <li>
    <p>
      {name} : {number}
    </p>

    <label>
      <input type='checkbox' checked={group} onChange={onUpdate} />
      Best friend
    </label>

    <button type='button' onClick={onDelete}>
      Delete
    </button>
  </li>
)

ContactsListItem.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      group: PropTypes.bool.isRequired
    })
  )
}
