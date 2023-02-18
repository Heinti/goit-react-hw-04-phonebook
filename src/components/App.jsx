import { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';

export const App = () => {
  const [contacts, setContacts] = useState(getDataFromLocal);
  const [filter, setFilter] = useState('');

  function getDataFromLocal() {
    const localSt = localStorage.getItem('contacts');
    const parseSt = JSON.parse(localSt);

    if (parseSt) {
      return parseSt;
    }
    return [];
  }

  const addContactFormData = data => {
    console.log(data)
    const newContact = { id: nanoid(), name: data.name, number: data.number };

    const findDouble = contacts.find(({ name }) => {
      return name === data.name;
    });

    if (findDouble) {
      return alert(`${findDouble.name} is already in contact`);
    }

    setContacts([...contacts, newContact]);
  };

  const deleteContactFormData = dataId => {
    setContacts(contacts.filter(contact => contact.id !== dataId));
  };

  const filterContactData = e => {
    const filverValue = e.target.value;
    setFilter(filverValue);

  };

  const getvisibleContacts = () => {
    const toLowerCaseName = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(toLowerCaseName)
    );
  };

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const visibleContacts = getvisibleContacts();

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContactFormData} />

      <h2>Contacts</h2>
      <Filter onChange={filterContactData} value={filter} />

      <ContactList data={visibleContacts} onDelete={deleteContactFormData} />
    </div>
  );
};



//before hooks

// export class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };

//   addContactFormData = data => {
//     const newContact = {id: nanoid(), name: data.name, number:data.number };

//     const contacts = this.state.contacts;
//     const findDouble = contacts.find(({ name }) => {
//       return name === data.name;
//     });

//     if (findDouble) {
//       return alert(`${findDouble.name} is already in contact`);
//     }
//     this.setState(prevState => ({
//       contacts: [...prevState.contacts, newContact],
//     }));
//   };

//   deleteContactFormData = dataId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== dataId),
//     }));
//   };

//   filterContactData = e => {
//     // console.log(e);
//     this.setState({ filter: e.target.value });
//   };

//   getvisibleContacts = ()=>{
//     const {contacts, filter} = this.state

//     const toLowerCaseName = filter.toLowerCase();
//     return contacts.filter(contact => contact.name.toLowerCase().includes(toLowerCaseName))

//   }

//   componentDidMount(){
//     const localSt = localStorage.getItem('contacts');
//     const parseSt = JSON.parse(localSt)

//     if (parseSt) {
//         this.setState({contacts: parseSt})
//     }

//   }

//   componentDidUpdate( _, prevState){
//     if (prevState.contacts !== this.state.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
//     }
//   }
//   render() {
//     const { filter } = this.state;
//     const visibleContacts = this.getvisibleContacts()

//     return (
//       <div>
//         <h1>Phonebook</h1>
//         <ContactForm onSubmit={this.addContactFormData} />

//         <h2>Contacts</h2>
//         <Filter onChange={this.filterContactData} value={filter} />

//         <ContactList
//           data={visibleContacts}
//           onDelete={this.deleteContactFormData}
//         />
//       </div>
//     );
//   }
// }
