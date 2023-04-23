import React, { Component } from 'react';
import { Contact } from './Contact';

export default class ContactList extends Component {
  render() {
    return (
      <ul>
        {this.props.contacts
          .filter(contact => {
            return contact.name
              .toLowerCase()
              .includes(this.props.filter.toLowerCase());
          })
          .map(contact => {
            return (
              <Contact
                key={contact.id}
                id={contact.id}
                name={contact.name}
                number={contact.number}
                onDelete={id => {
                  return this.props.onDelete(id);
                }}
              />
            );
          })}
      </ul>
    );
  }
}
