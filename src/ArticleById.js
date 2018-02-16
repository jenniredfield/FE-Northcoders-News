import React, { Component } from 'react';
import Voter from './Voter.js';
import { changeVote, fetchComments, fetchArticlesById, postComment, deleteComment } from './api.js';
import moment from 'moment';

class ArticleById extends Component {

    state = {
      article: [],
      id: this.props.match.params.article_id,
      comments: [],
      comment: '',
    }

    componentDidMount() {
      window.scrollTo(0, 0);
      this.getArticle();
      this.getComments();
    }

    getArticle = () => {
      fetchArticlesById(this.state.id).then(res => {
        this.setState({
          article: res,
        });
      });
    }

    getComments = () => {
      fetchComments(this.state.id).then(comments => {
        this.setState({
          comments: comments.reverse(),
        });
      });

    }

    voteOnArticle = (id, value) => {
      changeVote('articles', id, value).then(newArticle => {
        newArticle = newArticle.article[0];
        this.setState({
          article: newArticle,
        });

      });
    }

    handleComment = (event) => {
      this.setState({
        comment: event.target.value,
      });
    }

    onSubmitComment = () => {
      const data = { comment: this.state.comment };
      postComment(data, this.state.id).then(() => {
        this.getComments();
        this.setState({
          comment: '',
        });
      });
    }

    voteOnComment = (id, value) => {
      changeVote('comments', id, value).then(newComment => {
        let updatedComments = this.state.comments.map(comment => {
          if (comment._id === newComment._id) {
            return newComment;
          } else {
            return comment;
          }
        });
        this.setState({
          comments: updatedComments,
        });
      });
    }

    handleDelete = (id) => {
      deleteComment(id).then(() => {
        this.getComments();
      });
    }

    render() {
      return (
        <div className="home-articles-wrapper">
          <div className="article-wrapper">
            <div className="article-by-id">
              <h2>{this.state.article.title}</h2>
              <h3>{this.state.article.created_by}</h3>
              <p>{this.state.article.body}</p>
            </div>
            <div className="article-votes">
              <Voter
                votes={this.state.article.votes}
                onVote={this.voteOnArticle.bind(null, this.state.id)}
              />
            </div>
          </div>

          <div className="com-vote">
            <div className="insert-comment">
              <h2>Comment</h2>
              <form>
                <textarea onChange={this.handleComment} value={this.state.comment} />
              </form>
              <div className="bt-div">
                <button onClick={this.onSubmitComment} className="comment-button">Submit</button>
              </div>
            </div>
          </div>

          <div className="comments">
            <h2>All Comments</h2><span> -- {this.state.comments.length}</span>
            {
              this.state.comments.map((comment, i) => {
                return (

                  <div className="comments-div" key={i}>
                    <h3>{comment.created_by}</h3><span className="comment-time">{moment(comment.created_at).format('LLL')}</span>
                    <p>{comment.body}</p>
                    <Voter votes={comment.votes} onVote={this.voteOnComment.bind(null, comment._id)} />
                    <button onClick={() => this.handleDelete(comment._id)} className={comment.created_by === 'northcoder' ? 'delete-button' : 'hide' }>Delete</button>
                  </div>
                );
              })
            }
          </div>
        </div>
      );
    }
}

export default ArticleById;