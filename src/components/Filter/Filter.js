import React from 'react'
import PropTypes from 'prop-types'

export const Filter = ({ value, onUpdateFilter }) => {
  return (
    <div>
      <input
        value={value}
        type='text'
        placeholder='Find contact'
        onChange={event => onUpdateFilter(event.target.value)}
      />
    </div>
  )
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onUpdateFilter: PropTypes.func.isRequired
}

// export const Filter = ({ filter, contacts, update }) => {
//   const dataSearch = e => {
//     const value = e.target.value.toLowerCase()

//     const filteredContacts = contacts.filter(contact => {
//       return contact.name.toLowerCase().includes(value)
//     })

//     update({
//       contacts: filteredContacts,
//       filter: value
//     })
//   }

//   return (
//     <div>
//       <input
//         value={filter}
//         type='text'
//         placeholder='Find contact'
//         onChange={dataSearch}
//       />
//     </div>
//   )
// }
