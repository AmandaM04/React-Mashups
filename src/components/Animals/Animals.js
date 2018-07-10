import React from 'react';

import './Animals.css';

class Animals extends React.Component {
  render () {
    const { animals } = this.props;
    const animalItemComponents = animals.map((animal) => {
      return (
        <div key={animal.id}>
          <div className="animalCard">
            <div className="thumbnail col-sm-4">
              <img src={animal.imgUrl} alt="animal pic" />
              <h3>{animal.name}</h3>
              <p>{animal.description}</p>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="Animals">
        <h4>Animals</h4>
        {animalItemComponents}
      </div>
    );
  }
}

export default Animals;
