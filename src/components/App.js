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
      name: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    const newName = event.currentTarget.elements.name.value;
    console.log(newName);
  }

  // handleChange = event => {
  //   console.log(event.currentTarget)
  //   console.log(event.currentTarget.name)
  //   console.log(event.currentTarget.value)
  //   this.setState({
  //     [event.currentTarget.name]: [event.currentTarget.value]
  //   })
  // }

  addContact = (name) => {
    const newContact = {
      id: nanoid(),
      name
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
        <ContactsEditor onSubmit={this.handleSubmit}></ContactsEditor>

        <ul>
          <ContactsList
            contacts={contacts}
            onDeleteContact={this.deleteContact}
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
