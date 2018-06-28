import React from 'react';

import './Animals.css';

class Animals extends React.Component {
  render () {
    const { animals } = this.props;
    const animalItemComponents = animals.map((animal) => {
      return (
        <div key={animal.id}>{animal.name}</div>
      );
    });
    return (
      <div className="Animals">
        <h4>Animals</h4>
        <div className="thumbnail">{animalItemComponents}</div>
      </div>
    );
  }
}

export default Animals;
