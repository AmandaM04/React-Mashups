import React, { Component } from 'react';

import Animals from '../components/Animals/Animals';
import ListingForm from '../components/ListingForm/ListingForm';

import './App.css';

class App extends Component {
  render () {
    return (
      <div className="App">
        <div className="col-sm-8">
          <Animals />
        </div>
        <div className="col-sm-4">
          <ListingForm />
        </div>
      </div>
    );
  }
}

export default App;
