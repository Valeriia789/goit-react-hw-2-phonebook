import React, { Component } from 'react'

class ContactsEditor extends Component {
 
  render () {
    return (
      <form onSubmit={this.handleAdd}>
      <label>
        Name
        <input
          type='text'
          name='name'
          // value={this.state.name}
          // onChange={this.handleChange}
          placeholder='Entet Name'
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label>
        Phone number
        <input
          type='tel'
          name='number'
          // value={this.state.number}
          // onChange={this.handleChenge}
          placeholder='Entet Phone Number'
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <button type='submit'>Add contact</button>
    </form>
    )
  }
}

export default ContactsEditor