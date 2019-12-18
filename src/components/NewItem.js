import React, { Component } from 'react';

import './NewItem.css';

class NewItem extends Component {

  handleChange = event => {
    console.log(this.props)
    const { target:{ value } } = event;
    this.props.updateNewItemValue(value)
  };

  handleSubmit = event => {
    const { value } = this.props

    event.preventDefault();

    this.props.addItem(value);


  };

  render() {
    const { value } = this.props;

    return (
      <form className="NewItem" onSubmit={this.handleSubmit}>
        <input
          className="NewItem-input"
          type="text"
          value={value}
          onChange={this.handleChange}
        />
        <input className="NewItem-submit button" type="submit" />
      </form>
    );
  }
}

export default NewItem;
