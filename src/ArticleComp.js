import React from 'react';
import { Link } from 'react-router-dom';
import Voter from './Voter.js';

const ArticleComp = ({ articles, voteOnArticle }) => {

  return articles.map((article, i) => {

    return (
      <div className="column is-half" key={i}>
        <div className="home-div-a">
          <Link to={`/articles/${article._id}`}>
            <h2>{article.title}</h2> </Link>
       
          <span className="p-small">{article.belongs_to[0].toUpperCase() + article.belongs_to.substr(1, article.belongs_to.length)} </span>
          <Link to={`/users/${article.created_by}`}><span>-- {article.created_by}</span></Link>
          <Link to={`/articles/${article._id}`}> <p className="p-small">{article.body.slice(0, 150) + '...'}</p> </Link>
        </div>

        <div className="home-icons">
          <Voter 
            votes={article.votes}
            onVote={voteOnArticle.bind(null, article._id)}
          />
          <div className="ic-div"><i className="fa fa-comment-o" aria-hidden="true"></i>{article.comments}</div>
        </div>
      </div>

    );

  });

};

export default ArticleComp;