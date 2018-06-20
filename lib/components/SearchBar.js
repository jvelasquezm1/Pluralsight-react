import React, { Component } from 'react';
import { debounce } from 'lodash';
import storeProvider from './storeProvider';

class SearchBar extends Component {
    state = {
      searchTerm: '',
    }
    doSearch = debounce(() => {
      this.props.store.setSearchTerm(this.state.searchTerm);
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

export default storeProvider()(SearchBar);