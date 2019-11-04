import React, { useState, useEffect } from 'react';


const Update = props => {

const [ user, setUser ] = useState(props.currentUser)

useEffect(
  () => {
    setUser(props.currentUser)
  },
  [ props ]
)
// You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

const handleInputChange = event => {
  const { name, value } = event.target

  setUser({ ...user, [name]: value })
}

return (
          <div  >
            <div className="row">
                <div className="col-md-6">
                   <i className="fas fa-users" /> Welcome Onboard
              
                </div>
              </div>
      
              <div className="card">
                <div className="card-header">Update Users</div>
                <div className="card-body row h-75 justify-content-center align-items-center">
                  <form 
                  onSubmit={event => {
                    event.preventDefault()
            
                    props.updateUser(user.id, user)
                  }}
                  >
                    <div className="form-group">
                      <label htmlFor="firstName">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="firstName"
                        minLength="2"
                        required
                        value={user.firstName}
                        onChange={handleInputChange}
                      />
                    </div>
      
                    <div className="form-group">
                      <label htmlFor="lastName">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="lastName"
                        minLength="2"
                        required
                        value={user.lastName} 
                        onChange={handleInputChange}
                      />
                    </div>

                    <div class="form-group">
                       <label htmlFor="prefill">Birthday...</label>
                       <input
                           name="Birthday" 
                           placeholder="Selected date"
                           type="date" 
                           //id="prefill"
                           className="form-control datepicker"
                           required
                           value={user.Birthday}
                           onChange={handleInputChange}
                        />
                        
                    </div>
      
                    <div className="form-group">
                      <label htmlFor="Age">Age</label>
                      <input
                        type="text"
                        className="form-control"
                        name="Age"
                        minLength="3"
                        required
                        value={user.Age}
                        onChange={handleInputChange}
                      />
                    </div>
      
                    <div className="form-group">
                      <label htmlFor="Hobby">Hobby</label>
                      <input
                        type="text"
                        className="form-control"
                        name="Hobby"
                        minLength="Hobby"
                        required
                        value={user.Hobby}
                        onChange={handleInputChange}
                      />
                    </div>

                    
      
                    <input
                      type="submit"
                      value="update"
                      className="btn btn-primary btn-block"
                    />
                  </form>
                  <pre>
          
                 </pre>
                </div>
              </div>  
          </div>
        );
      
  
}

export default Update;