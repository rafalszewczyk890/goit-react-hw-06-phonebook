import React from 'react';
import { deleteContact } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { contactsSelector } from 'redux/selectors';

export const Contact = props => {
  const contacts = useSelector(contactsSelector);
  const { id, name, number } = props;

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
    localStorage.setItem('contacts', JSON.stringify(contacts));
  };

  return (
    <li id={id}>
      {name}: {number} <button onClick={handleDelete}>Delete</button>
    </li>
  );
};
