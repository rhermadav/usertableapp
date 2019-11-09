import React, { Component } from 'react';
import Table from './Table';
import Navigation from '../Navigation/Navigation';
import Formuser from '../Formuser/Formuser';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { getContact } from '../../actions/contactActions';



class Tables extends Component {
  componentDidMount(){
    this.props.getContact();
  }

  render() {
    const { contacts } = this.props;
    return (
      <React.Fragment>'
        <Navigation />
        <Formuser />
        <h1 className="display-4 mb-2">
          <span className="text-danger">User</span> Table
        </h1>
        {contacts.map(contact => (
          <Table key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

Tables.propTypes = {
  Contacts: propTypes.array.isRequired,
  getContacts: propTypes.func.isRequired
 }
 
 const mapStateToProps = (state) => ({
   contacts: state.contact.contacts
 });
 
 
 export default connect(
   mapStateToProps,
   {getContact}
   )(Tables);
