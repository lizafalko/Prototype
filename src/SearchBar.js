import React, { Component } from 'react';
import ReactDOM from 'react';

export class SearchBar extends Component {
  render() {
    return(
      <div className="search-bar">
        <i className="search-icon fa fa-search" />
        <input
          className="search-input"
          type="text"
          placeholder="Введите название абстракции ..."
          onChange={this.props.onSearch}
        />
      </div>
    )
  }
}

export default SearchBar;
