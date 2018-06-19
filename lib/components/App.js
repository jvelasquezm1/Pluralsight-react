import React, { Component } from 'react';
import DataAPi from '../DataApi';
import { data } from '../testData';

import ArticleList from './ArticleList';

const api = new DataAPi(data);

class App extends Component {
    state = {
      articles: api.getArticles(),
      authors: api.getAuthors()
    }
    render() {
      return (
        <div>
            FDAFDAS
          <ArticleList
            articles = {this.state.articles}
            authors = {this.state.authors}
          />
        </div>
      );
    }
}

export default App;