import React, { Component } from 'react'
import { nanoid } from 'nanoid'
// model.id = nanoid()
import initialContacts from './initialContacts.json'
import { ContactsList } from './Contacts/ContactsList'
import ContactsEditor from './ContactsEditor/ContactsEditor'
import { Filter } from './Filter/Filter'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      contacts: initialContacts,
      filter: ''
    }
  }

  addContact = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number
    }
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact]
      }
    })
  }

  // findContact = event => {
  //   this.state.contacts.filter(contact => {
  //     return contact.name
  //       .toLowerCase()
  //       .includes(event.target.value.toLowerCase())
  //   })
  // }


  // findContact = contactName => {
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(contact => contact.name === contactName)
  //   }))
  // }

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  }

  render () {
    const { contacts, filter } = this.state
    const closeFriends = contacts.filter(contact => contact.close)
    // const closeFriends = contacts.reduce(
    //   (acc, contact) => (contact.close ? acc + 1 : acc),
    //   0
    // )

    console.log();

    return (
      <>
        <ContactsEditor onAddContact={this.addContact}></ContactsEditor>

        <Filter value={filter} ></Filter>

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



// беремо нейм (дані), що приходить в filter з інпута 
// і шукаємо такий самий серед масиву обєктів contacts свойства name
// і не розумію, куди їх рендерити (в список contacts?)