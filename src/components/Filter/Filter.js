import React from 'react'
import PropTypes from 'prop-types'

export const Filter = ({ filter, contacts, update }) => {
  const dataSearch = e => {
    const value = e.target.value.toLowerCase()

    const filteredContacts = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(value)
    })

    update({
      contacts: filteredContacts,
      filter: value
    })
  }

  return (
    <div>
      <input
        value={filter}
        type='text'
        placeholder='Find contact'
        onChange={dataSearch}
      />
    </div>
  )
}
