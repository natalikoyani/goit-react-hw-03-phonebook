import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    try {
      const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
      if (parsedContacts) {
        this.setState({ contacts: parsedContacts });
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = newContact => {
    if (
      this.state.contacts.some(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      return alert(`${newContact.name} is already in contacts!`);
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...newContact, id: nanoid() }],
    }));
  };

  onFilterChange = evt => {
    this.setState({ filter: evt.target.value });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  filterContacts() {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  render() {
    const filteredContacts = this.filterContacts();

    return (
      <div>
        <h2>Phonebook</h2>
        <ContactForm onAddContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter items={filteredContacts} onChange={this.onFilterChange} />
        <ContactList items={filteredContacts} onDelete={this.deleteContact} />
      </div>
    );
  }
}
