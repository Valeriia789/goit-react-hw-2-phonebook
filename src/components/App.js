import React, { Component } from 'react'
import { nanoid } from 'nanoid'
// model.id = nanoid()
import initialContacts from './initialContacts.json'
import { ContactsList } from './Contacts/ContactsList'

class App extends Component {
  // Стан оголошується в конструкторі, оскільки це перше, що відбувається,
  //  коли створюється екземпляр класу.
  constructor (props) {
    super(props)

    this.state = {
      contacts: initialContacts,
      name: ''
    }
  }

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  }
  render () {
    // console.log(Object.keys(this.state));
    // console.log(Object.values(this.state));

    return (
      <>
        <form>
          <label>
            Name
            <input
              type='text'
              name='name'
              placeholder='Entet Name'
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>

          <button type='submit'>Add contact</button>
        </form>

        <ul>
          <ContactsList
            contacts={this.state.contacts}
            onDeleteContact={this.deleteContact}
          ></ContactsList>
        </ul>
      </>
    )
  }
}

export default App

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework
//     </div>
//   );
// };
