import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getContact } from '../../actions/contactActions';


class Update  extends Component {
  state = {
    firstName: '',
    lastName: '',
    Birthday: '',
    Age: '',
    Hobby:'',
    errors: {}
  };

  componentWillReceiveProps(nextProps,nextState){
    const { firstName, lastName, Birthday, Age, Hobby } = nextProps.contact;
    this.setState({
      firstName,
      lastName,
      Birthday,
      Age,
      Hobby
    });

  }

  componentDidMount(){
    const { id } = this.props.match.params;
    this.props.getContact(id);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, Birthday, Age, Hobby } = this.state;

    // Check For Errors
    if (firstName === '') {
      this.setState({ errors: { name: 'firstname is required' } });
      return;
    }

    if (lastName === '') {
      this.setState({ errors: { email: 'Email is required' } });
      return;
    }

    if (Birthday === '') {
      this.setState({ errors: { phone: 'Phone is required' } });
      return;
    }

    
    if (Age === '') {
      this.setState({ errors: { phone: 'Age is required' } });
      return;
    }

    
    if (Hobby === '') {
      this.setState({ errors: { phone: 'Hobby is required' } });
      return;
    }

    const updateContact = {
      firstName,
      lastName,
      Birthday,
      Age,
      Hobby
    };

   

    //// UPDATE CONTACT ////

    // Clear State
    this.setState({
      firstName: '',
      lastName: '',
      Birthday: '',
      Age:'',
      Hobby:'',
      errors: {}
    });

    this.props.history.push('/');
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render(){
    const { firstName, lastName, Birthday, Age, Hobby, errors } = this.state;
     return(
      <div  >
            <div className="row">
                <div className="col-md-6">
                   <i className="fas fa-users" /> Welcome Onboard
              
                </div>
              </div>
      
              <div className="card">
                <div className="card-header">Edit User</div>
                <div className="card-body row h-75 justify-content-center align-items-center">
                  <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <label htmlFor="firstName">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="firstName"
                        minLength="2"
                        required
                        value={firstName}
                        onChange={this.onChange}
                        error={errors.firstName}
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
                        value={lastName} 
                        onChange={this.onChange}
                        error={errors.lastName}
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
                           value={Birthday}
                           onChange={this.onChange}
                           error={errors.Birthday}
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
                        value={Age}
                        onChange={this.onChange}
                        error={errors.Age}
                      />
                    </div>
      
                    <div className="form-group">
                      <label htmlFor="Hobby">Hobby</label>
                      <input
                        type="text"
                        className="form-control"
                        name="Hobby"
                        required
                        value={Hobby}
                        onChange={this.onChange}
                        error={errors.Hobby}
                      />
                    </div>

                    
      
      
                    <input
                      type="submit"
                      value="Update"
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
   
}

Update.propTypes = {
  contact: PropTypes.object.isRequired,
  getContact: PropTypes.func.isRequired
}


const mapStateToProps = (state) => ({
  contact: state.contact.contact
});

export default connect(mapStateToProps, { getContact })(Update);