import React from 'react'
import PropTypes from 'prop-types'
import { ContactsListItem } from './ContactsListItem'

export const ContactsList = ({
  contacts,
  onDeleteContact,
  onUpdateContact
}) => {
  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {contacts.map(contact => (
          <ContactsListItem
            key={contact.id}
            name={contact.name}
            number={contact.number}
            group={contact.group}
            onDelete={() => onDeleteContact(contact.id)}
            onUpdate={() => onUpdateContact(contact.id)}
          />
        ))}
      </ul>
    </div>
  )
}
