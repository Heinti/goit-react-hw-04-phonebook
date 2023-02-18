import React, { useState } from 'react';
import css from '../ContactForm/ContactForm.module.css';
import PropTypes from 'prop-types';

export function ContactForm  ({onSubmit}) {


 
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')


  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({name, number});

    setName('')
    setNumber('')
  };

 const handleStateValue = e => {
    const changeValue = e.target;
    const changeMessage = changeValue.value;


    switch(changeValue.name){
      case 'name':
        setName(changeMessage);
        break;

        case 'number':
          setNumber(changeMessage);
          break;
          
          default: 
          alert('invalid values')
    }
  };

  return (
    <section>
      <form action="submit" onSubmit={handleSubmit}>
        <label htmlFor="Name" className={css.form__Label}>
          Name
          <input
            autoComplete="off"
            type="text"
            name="name"
            value={name}
            onChange={handleStateValue}
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
            value={number}
            onChange={handleStateValue}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={css.form__Btn} type="submit">
          Add contact
        </button>
      </form>
    </section>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
