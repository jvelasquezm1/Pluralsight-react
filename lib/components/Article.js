import React from 'react';
import PropTypes from 'prop-types';
import storeProvider from './storeProvider';

const Article = (props) => {
  const { article, author } = props;
  return (
    <div>
      <div>{article.title}</div>
      <div>{article.date}</div>
      <a href = {author.website}>
        <div>{author.firstName} {author.lastName}</div>
      </a>
      <div>{article.body}</div>
    </div>
  );
};

Article.propTypes = {
  article: PropTypes.shape({
    body: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  })
};

function extraProps(store, originalProps) {
  return {
    author: store.lookUpAuthor(originalProps.article.authorId)
  };
}

//Similar to connect in Redux
const ArticleContainer = storeProvider(extraProps)(Article);

export default ArticleContainer;