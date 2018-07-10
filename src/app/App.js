import React, { Component } from 'react';

import connection from '../firebaseRequests/connection';
import { getRequest, postRequest } from '../firebaseRequests/animalRequest';

import Animals from '../components/Animals/Animals';
import ListingForm from '../components/ListingForm/ListingForm';

import './App.css';

class App extends Component {
  state = {
    animals: [],
  }

  formSubmitEvent = (animal) => {
    postRequest(animal)
      .then(() => {
        getRequest()
          .then((animals) => {
            this.setState({ animals });
          });
      })
      .catch((error) => {
        console.error(error.message);
      });
  }

  componentDidMount () {
    connection();
    getRequest()
      .then((animals) => {
        this.setState({ animals });
      })
      .catch((error) => {
        console.error(error.message);
      });
  }

  render () {
    return (
      <div className="App">
        <div className="col-sm-8">
          <Animals
            animals={this.state.animals}
          />
        </div>
        <div className="col-sm-4">
          <ListingForm
            onSubmit={this.formSubmitEvent}
          />
        </div>
      </div>
    );
  }
}

export default App;
