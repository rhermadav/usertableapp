import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Update from './Components/Update/Update';
import Tables from './Components/Tables/Tables';
import { Provider } from 'react-redux';
import store from './store';



import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
	
    return (
			<Provider store={store}>
			<Router>
				<div className="App">
				<div className="container">
				  <Switch>
					    <Route exact path="/" component={Tables} />
              <Route exact path="/contact/edit/:id" component={Update} />
					</Switch>
				</div>
			</div>
			</Router>
			</Provider>
       );
  }
}

export default App;
