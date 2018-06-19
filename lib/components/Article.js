import React from 'react';

const Article = (props) => {
  const { article, store } = props;
  const author = store.lookUpAuthor(article.authorId);
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

export default Article;