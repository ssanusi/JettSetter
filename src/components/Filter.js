import React, { PureComponent } from 'react';

import './Filter.css';

class Filter extends PureComponent {
  handleChange = event => {
    const { updateFilter } = this.props;
    const value = event.target.value;
    updateFilter(value);
  };

  render() {
    const { value } = this.props;
    return (
      <input
        className="Items-searchTerm"
        value={value}
        onChange={this.handleChange}
      />
    );
  }
}

export default Filter;
