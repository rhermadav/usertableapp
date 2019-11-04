import React, { useState, Fragment } from 'react';
import Navigation from './Components/Navigation/Navigation';
import Update from './Components/Update/Update';
import Formuser from './Components/Formuser/Formuser';
import Tables from './Components/Tables/Tables';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



const App = () => {
    // Data
	const usersData = [
    { id: 1, firstName: 'Osarodion', lastName: 'Uyigue',  Birthday:'13-Jun-1995', Age:'24', Hobby:'Programing'  },
    { id: 2, firstName: 'Davidson', lastName: 'Uyigue',  Birthday:'13-Jun-1995', Age:'24', Hobby:'Programing'  },
		{ id: 3, firstName: 'Daniel', lastName: 'Smith',  Birthday:'12-Jun-1995', Age:'24', Hobby:'Programing'  }
	]

	const initialFormState = { id: null, firstName: '', lastName: '', Birthday:'', Age:'', Hobby:'' }

	// Setting state
	const [ users, setUsers ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	// CRUD operations
	const addUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
	}

	// const deleteUser = id => {
	// 	setEditing(false)

	// 	setUsers(users.filter(user => user.id !== id))
	// }

	const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)

		setCurrentUser({ id: user.id, firstName: user.firstName, lastName: user.lastName, Birthday:user.Birthday, Age:user.Age, Hobby:user.Hobby })
	}

  
    return (
      <div className="App">
        <Navigation />
        {editing ? (
						<Fragment>
							<Update
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</Fragment>
					) : (
						<Fragment>
							<Formuser addUser={addUser} />
						</Fragment>
					)}
        <h2>View users</h2>
        <Tables users={users} editRow={editRow} />
        
        </div>
    );
  
}


export default App;
