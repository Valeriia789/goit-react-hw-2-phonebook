import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ContactsEditor extends Component {
  state = {
    name: '',
    number: ''
  }

  handleChange = event => {
    const { name, value } = event.target

    this.setState({
      [name]: value
    })

    // console.log(event.target.name); //name, number
    // console.log(event.target.value); //імя чи телефон, що вводимо
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.onAddContact(this.state.name, this.state.number)
    this.setState({ name: '', number: '' })

    console.log(this.state)
  }

  render () {
    const { name, number } = this.state

    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Phonebook</h2>
        <label>
          Name
          <input
            type='text'
            name='name'
            value={name}
            onChange={this.handleChange}
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
            value={number}
            onChange={this.handleChange}
            placeholder='Entet Phone Number'
            pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
            title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
            required
          />
        </label>

        <button type='submit'>Add contact</button>
      </form>
    )
  }
}
