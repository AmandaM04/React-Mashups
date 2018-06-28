import React, { Component } from 'react';

import connection from '../firebaseRequests/connection';
import showAnimals from '../firebaseRequests/animalRequest';

import Animals from '../components/Animals/Animals';
import ListingForm from '../components/ListingForm/ListingForm';

import './App.css';

class App extends Component {
  state = {
    animals: [],
  }

  componentDidMount () {
    connection();
    showAnimals.getRequest()
      .then((animals) => {
        this.setState({ animals });
      })
      .catch((err) => {
        console.error('err', err);
      });
  }

  render () {
    return (
      <div className="App">
        <div className="col-sm-8">
          <Animals animals={this.state.animals}/>
        </div>
        <div className="col-sm-4">
          <ListingForm />
        </div>
      </div>
    );
  }
}

export default App;
