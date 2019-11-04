import React from 'react';

const Tables = (props) => (
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
    {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
           <td>
             {user.firstName} 
           </td>
           <td>{user.lastName}</td>
           <td>{user.Birthday}</td>
           <td>{user.Age}</td>
           <td> {user.Hobby}</td>

           <td>
             <button
              onClick={() => {
                  props.editRow(user)
                }}
              className="btn btn-secondary btn-sm">
             <i className="fas fa-arrow-circle-right" /> Edit
             </button>
           </td>
       </tr>
    ))
    ) : (
      <tr>
        <td colSpan={3}>No users</td>
      </tr>
    )}
 </tbody>
</table>     
)

export default Tables;
