import React, { Component } from 'react';
import css from '../ContactForm/ContactForm.module.css'
import PropTypes from 'prop-types';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);

    this.setState({  name: '', number: '' });
  };

  handleStateValue = e => {
    const changeValue = e.target;
    const changeMessage = changeValue.value;
    this.setState({  [changeValue.name]: changeMessage });
  };

  render() {
    return (
      <section>
        <form action="submit" onSubmit={this.handleSubmit}>
          <label htmlFor="Name" className={css.form__Label}>
            Name
            <input
              autoComplete="off"
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleStateValue}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label htmlFor="Phone" className={css.form__Label}>
            Number
            <input
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handleStateValue}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button className={css.form__Btn} type="submit">Add contact</button>
        </form>
      </section>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}