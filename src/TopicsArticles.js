import React, { Component } from 'react';
import ArticleComp from './ArticleComp'
import {fetchArticlesTwo, changeVote} from './api.js';


class TopicsArticles extends Component {

    state = {
        articles: [],
        topic: this.props.match.params.topic,
        loading: true
    }
  
    componentDidMount(){
  
        fetchArticlesTwo('topics', this.state.topic).then(body => {
       
            this.setState({ articles : body, loading: false })
        })
    }


    componentWillReceiveProps(nextProps){
      const oldProps = this.state.topic;
      const newProps = nextProps.match.params.topic;
       

        if(newProps !== oldProps) {

            fetchArticlesTwo('topics', newProps).then(body => {
 
                this.setState({ articles : body, topic: newProps })
                })
            }
        }
    

     voteOnArticle = (id, value) => {

        changeVote('articles', id, value).then(newArticle => {
            newArticle = newArticle.article[0];

            let updatedArticles = this.state.articles.map(article => {
                        if(article._id === newArticle._id) {
                            newArticle.comments = article.comments;
                            return newArticle;
                        } else {
                            return article;
                        }
                })
                
                this.setState({
                    articles : updatedArticles,
                })

          })
  

        }


    render () {

        if(this.state.loading) {
            return ( <div className='loading'>Loading...</div> )
            }


        return (

            <div className="home-articles-wrapper">
              <div className="page-title"><h2>{this.state.topic} | Trending news</h2> </div>
                <div className="columns">
 
                    <ArticleComp articles={this.state.articles} voteOnArticle={this.voteOnArticle}/>
                </div>
                               
  
            </div>
            
        
             

        )
    }
}

export default TopicsArticles;