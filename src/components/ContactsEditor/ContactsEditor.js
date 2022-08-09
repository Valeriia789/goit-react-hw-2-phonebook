import React, { Component } from 'react'

class ContactsEditor extends Component {
  state = {
    contacts: [],
    name: '',
    number: ''
  }

  handleChenge = event => {
    // console.log(event.currentTarget)
    // console.log(event.currentTarget.name)
    // console.log(event.currentTarget.value)
    this.setState({
      [event.currentTarget.name]: [event.currentTarget.value]
    })
  }

  handleAdd = e => {
    e.preventDefault();
    console.log(this.state);
  }

  render () {
    return (
      <form onSubmit={this.handleAdd}>
      <label>
        Name
        <input
          type='text'
          name='name'
          value={this.state.name}
          onChange={this.handleChenge}
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
          value={this.state.number}
          onChange={this.handleChenge}
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