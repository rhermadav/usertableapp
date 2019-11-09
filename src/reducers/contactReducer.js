import {GET_CONTACTS ,GET_CONTACT, EDIT_CONTACT , ADD_CONTACT } from '../actions/types';


const initialState = {
  contacts: [
    { id: 1, firstName: 'Osarodion', lastName: 'Uyigue',  Birthday:'13-Jun-1995', Age:'24', Hobby:'Programing'  },
    { id: 2, firstName: 'Davidson', lastName: 'Uyigue',  Birthday:'13-Jun-1995', Age:'24', Hobby:'Programing'  },
    { id: 3, firstName: 'Daniel', lastName: 'Smith',  Birthday:'12-Jun-1995', Age:'24', Hobby:'Programing'  }
  ],
 contact: {}
};

export default function(state = initialState, action){
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state
      };
    case GET_CONTACT:
        return {
          ...state,
          contact: action.payload
        };
    case EDIT_CONTACT:
        return {
          ...state,
          contacts: state.contacts.filter(
            contact => contact.id !==action.payload)
        };
    case ADD_CONTACT:
          return {
            ...state,
            contacts: [action.payload, ...state.contacts]

          };
    default:
      return state;
  }
}