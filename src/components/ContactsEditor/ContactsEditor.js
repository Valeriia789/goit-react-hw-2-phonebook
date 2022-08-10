import React, { Component } from 'react'

class ContactsEditor extends Component {
  state = {
    name: '',
    number: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
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
            type='tel'
            name='number'
            value={this.state.number}
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

export default ContactsEditor
