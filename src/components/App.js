import React, { Component } from 'react'
import { nanoid } from 'nanoid'
// model.id = nanoid()
import initialContacts from './initialContacts.json'
import { ContactsList } from './Contacts/ContactsList'
import ContactsEditor from './ContactsEditor/ContactsEditor'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      contacts: [],
    }
  }


  addContact = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    }

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact]
      }
    })
  }

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  }

  render () {
    const { contacts } = this.state
    const closeFriends = contacts.filter(contact => contact.close)
    // const closeFriends = contacts.reduce(
    //   (acc, contact) => (contact.close ? acc + 1 : acc),
    //   0
    // )

    return (
      <>
        <ContactsEditor onAddContact={this.addContact}></ContactsEditor>

        <ul>
          <ContactsList
            contacts={contacts}
            onDeleteContact={this.deleteContact}
            // onAddContact={this.addContact}
          ></ContactsList>
        </ul>

        <div>
          <p>Total contacts: {contacts.length}</p>
          <p>Close friends: {closeFriends.length}</p>
        </div>
      </>
    )
  }
}

export default App
