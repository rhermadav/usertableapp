import {GET_CONTACTS, EDIT_CONTACT, ADD_CONTACT,GET_CONTACT} from './types';

export const getContacts =() => {
  return {
    type:GET_CONTACTS
    };
};

export const getContact =(id) => {
  return {
    type:GET_CONTACT,
    payload: id
  };
};

export const deleteContact =(id) => {
  return {
    type:EDIT_CONTACT,
    payload: id
  };
};

export const addContact =(contact) => {
  return {
    type:ADD_CONTACT,
    payload: contact
  };
};