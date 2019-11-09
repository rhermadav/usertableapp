import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Table extends Component {
  
  onDeleteClick = id => {
    //// DELETE CONTACT ////
  };

  render() {
    const { id,firstName,lastName,Birthday,Age, Hobby } = this.props.contact;
    

    return (
      
      <table className="table table-striped">
      <thead className="thead-inverse">
           <tr>
              <th>firstName</th>
              <th>lastName</th>
              <th>Birthday</th>
              <th>Age</th>
              <th>Hobby</th>
              
              <th />
           </tr>
      </thead>
      <tbody>
           <tr >
              <td>
                 {firstName} 
               </td>
               <td>{lastName}</td>
               <td>{Birthday}</td>
               <td>{Age}</td>
               <td> {Hobby}</td>
    
               <td>
                 <button
                  // onClick={() => {
                  //     props.editRow(user)
                  //   }}
                  className="btn btn-secondary btn-sm">
                     <Link to={`contact/edit/${id}`}><i className="fas fa-arrow-circle-right" /></Link>
                     Edit
                 </button>
               </td>
           </tr>
       
     </tbody>
   </table>     
    );
  }
}

Table.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Table;
