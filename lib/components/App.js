import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ArticleList from './ArticleList';
import SearchBar from './SearchBar';
import Timestamp from './Timestamp';
import { pickBy } from 'lodash';

class App extends Component {
  static childContextTypes = {
    store: PropTypes.object
  }
  getChildContext(){
    return {
      store: this.props.store
    };
  }
  state = this.props.store.getState();
  onStoreChange = () => {
    this.setState(this.props.store.getState());
  };
  componentDidMount = () => {
    this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
    this.props.store.startClock();
  };
  componentWillUnmount = () => {
    this.props.store.unsubscribe(this.subscriptionId);
  };
  render() {
    let { articles, searchTerm } = this.state;
    const searchRE = new RegExp(searchTerm, 'i');
    if(searchTerm){
      articles = pickBy(articles, (value) => {
        return value.title.match(searchRE)
        || value.body.match(searchRE);
      });
    }
    return (
      <div>
        <Timestamp />
        <SearchBar />
        <ArticleList
          articles = {articles}
        />
      </div>
    );
  }
}

export default App;