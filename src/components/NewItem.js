import React, { Component } from 'react';
import { inject } from 'mobx-react';
import './NewItem.css';


@inject('itemList')
class NewItem extends Component {
  state = { value: '' };

  handleChange = event => {
    const { target:{ value } } = event;
    this.setState({ value })
  };

  handleSubmit = event => {
    const { itemList } = this.props;
    const { value } = this.state;

    event.preventDefault();

    itemList.addItem({ value })

      this.setState({ value : ''})
  };

  render() {
    const { value } = this.state;

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
