import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'

import initialContacts from './initialContacts.json'
import { ContactsList } from './Contacts/ContactsList'
import ContactsEditor from './ContactsEditor/ContactsEditor'
import { Filter } from './Filter/Filter'

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      contacts: initialContacts,
      filter: ''
    }
  }

  addContact = (name, number) => {
    const { contacts } = this.state

    if (contacts.map(contact => contact.name).includes(name)) {
      alert(`${name} is already in contacts`)
    } else {
      const newContact = {
        id: nanoid(),
        name,
        number,
        group: false
      }
      this.setState(prevState => {
        return {
          contacts: [...prevState.contacts, newContact]
        }
      })
    }
  }

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId)
      }
    })
  }

  updateGroup = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.map(contact => {
          if (contact.id === contactId) {
            return {
              ...contact,
              group: !contact.group
            }
          }
          return contact
        })
      }
    })
  }

  updateFilter = filter => {
    this.setState({ filter })
  }

  getFilteredContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    )
  }

  render () {
    const { contacts, filter } = this.state
    const filteredContacts = this.getFilteredContacts()

    const closeFriendsGroup = contacts.filter(contact => contact.group)
    // const closeFriendsGroup = contacts.reduce(
    //   (acc, contact) => (contact.group ? acc + 1 : acc),
    //   0
    // )

    return (
      <>
        <ContactsEditor onAddContact={this.addContact}></ContactsEditor>

        <Filter value={filter} onUpdateFilter={this.updateFilter} />

        {filteredContacts.length > 0 && (
          <ContactsList
            contacts={filteredContacts}
            onDeleteContact={this.deleteContact}
            onUpdateContact={this.updateGroup}
          />
        )}

        <div>
          <p>Total contacts: {contacts.length}</p>
          <p>Close friends: {closeFriendsGroup.length}</p>
        </div>
      </>
    )
  }
}
