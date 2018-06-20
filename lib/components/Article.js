import React from 'react';
import PropTypes from 'prop-types';

const Article = (props, context) => {
  const { article } = props;
  const author = context.store.lookUpAuthor(article.authorId);
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

Article.contextTypes = {
  store: PropTypes.object
};

export default Article;