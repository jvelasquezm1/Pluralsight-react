import React, { Component } from 'react';
import DataAPi from '../DataApi';
import { data } from '../testData';

import ArticleList from './ArticleList';

const api = new DataAPi(data);

class App extends Component {
    state = {
      articles: api.getArticles(),
      authors: api.getAuthors()
    };
    articleActions = {
      lookUpAuthor: (authorId) => this.state.authors[authorId],
    };
    render() {
      return (
        <div>
          <ArticleList
            articles = {this.state.articles}
            articleActions = {this.articleActions}
          />
        </div>
      );
    }
}

export default App;