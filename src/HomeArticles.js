import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ArticleComp from './ArticleComp'
import {fetchArticlesTwo, changeVote} from './api.js'

class HomeArticles extends Component {

    state = {
        articles: [],
        loading: true,

    }

    componentDidMount(){
        fetchArticlesTwo('articles').then(body => {

            this.setState({ articles : body.slice(0,10), loading: false, })
        })
    }


     voteOnArticle = (id, value) => {

        changeVote('articles', id, value).then(newArticle => { console.log(newArticle)
             return newArticle}).then((newArticle) =>  {
            newArticle = newArticle[0]
            console.log('*******', newArticle)
            let updatedArticles = this.state.articles.map(article => {
                        if(article._id === newArticle._id) {
                            console.log(newArticle.comments)
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
             <div className="page-title"> <h2>HOME | Trending news</h2></div>
                <div className="columns">
 
                    <ArticleComp articles={this.state.articles} voteOnArticle={this.voteOnArticle}/>
                </div>
                               
  
            </div>
            
        
             

        )
    }
}

export default HomeArticles;