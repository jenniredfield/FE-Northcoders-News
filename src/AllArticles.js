import React, { Component } from 'react';
import ArticleComp from './ArticleComp';
import {fetchArticlesTwo, changeVote} from './api.js';

class AllArticles extends Component {

    state = {
      articles: [],
      loading: true,

    }

    componentDidMount(){
      fetchArticlesTwo('articles').then(body => {
            
        this.setState({ articles : body, loading: false });
      });
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
         });
         
         this.setState({
           articles : updatedArticles,
         });

       });
  

     }


     render () {
       if(this.state.loading) {
         return ( <div className='loading'><div className="loader"></div></div> );
       }

       return (

         <div className="home-articles-wrapper">
           <div  className="page-title"> <h2>All Articles</h2></div>
           <div className="columns">
             <ArticleComp articles={this.state.articles} voteOnArticle={this.voteOnArticle}/>
           </div>
            
         </div>
             

       );
     }
}

export default AllArticles;