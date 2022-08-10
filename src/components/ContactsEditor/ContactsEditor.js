import React, { Component } from 'react'
import { nanoid } from 'nanoid'

class ContactsEditor extends Component {
  state = {
    name: '',
    number: '',
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    console.log(this.state)

    this.props.onAddContact(this.state.name, this.state.number)
    this.setState({ name: '', number: '' })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
      <label>
        Name
        <input
          type='text'
          name='name'
          value={this.state.name}
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
          type='text'
          name='number'
          value={this.state.number}
          onChange={this.handleChange}
          placeholder='Entet Phone Number'
          required
        />
      </label>

      <button type='submit'>Add contact</button>
    </form>
    )
  }
}

export default ContactsEditor