import React from 'react';

import './ListingForm.css';

const defaultListing = {
  name: '',
  imageUrl: '',
  description: '',
};

class ListingForm extends React.Component {
  state = {
    newListing: defaultListing,
  }

  nameChange = (e) => {
    this.formFieldStringState('name', e);
  }

  imageUrlChange = (e) => {
    this.formFieldStringState('imageUrl', e);
  }

  descriptionChange = e => {
    this.formFieldStringState('description', e);
  };

  formSubmit = (e) => {
    const { onSubmit } = this.props;
    const { newListing } = this.props;
    e.preventDefault();
    if (
      newListing.name &&
      newListing.imageUrl &&
      newListing.description
    ) {
      onSubmit(this.state.newListing);
      this.setState({ newListing: defaultListing });
    } else {
      alert('dear god why????');
    }
  }
  render () {
    const { newListing } = this.state;
    return (
      <div className="ListingForm">
        <h4 className="text-center">Add New Animal:</h4>
        <form>
          <fieldset className="col-xs-12">
            <label htmlFor="name">Name:</label>
            <input
              className="col-xs-12"
              type="text"
              id="name"
              placeholder="Name"
              value={newListing.name}
              onChange={this.nameChange}
            />
          </fieldset>
          <fieldset className="col-xs-12">
            <label htmlFor="imageUrl">Image Url:</label>
            <input
              className="col-xs-12"
              type="text"
              id="imageUrl"
              placeholder="http://www.google.com"
              value={newListing.imageUrl}
              onChange={this.imageUrlChange}
            />
          </fieldset>
          <fieldset className="col-xs-12">
            <label htmlFor="description">Description:</label>
            <input
              className="col-xs-12"
              type="text"
              id="description"
              placeholder="description"
              value={newListing.description}
              onChange={this.descriptionChange}
            />
          </fieldset>
          <button className="col-xs-4 btn btn-primary col-xs-offset-4">
            Add mashup
          </button>
        </form>
      </div>
    );
  }
}

export default ListingForm;
