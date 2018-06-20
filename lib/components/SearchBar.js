import React, { Component } from 'react';
import { debounce } from 'lodash';

class SearchBar extends Component {
    state = {
      searchTerm: '',
    }
    doSearch = debounce(() => {
      this.props.doSearch(this.state.searchTerm);
    }, 300);
    handleSearch = (e) => {
      this.setState({ searchTerm: e.target.value}, () => {
        this.doSearch();
      });
    }
    render() {
      return (
        <input
          type="search"
          placeholder="Enter search term"
          value={this.state.searchTerm}
          onChange={(e) => this.handleSearch(e)}/>
      );
    }
}

export default SearchBar;