import React, { useState } from 'react';

  const Formuser = props => {

  const initialFormState = { id: null, firstName:'',lastName:'',Birthday:'',Age:'',Hobby:'' }
	const [ user, setUser ] = useState(initialFormState)

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
                <div className="card-header">Add Users</div>
                <div className="card-body row h-75 justify-content-center align-items-center">
                  <form 
                  onSubmit={event => {
                    event.preventDefault()
                    if (!user.firstName || !user.lastName) return
            
                    props.addUser(user)
                    setUser(initialFormState)
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
                           className="form-control datepicker"
                           data-value="[2015,6,1]"
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
                        required
                        value={user.Hobby}
                        onChange={handleInputChange}
                      />
                    </div>

                    
      
      
                    <input
                      type="submit"
                      value="Submit"
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

export default Formuser;