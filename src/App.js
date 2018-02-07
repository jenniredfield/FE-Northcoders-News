import React, { Component } from 'react';
import NavBar from './NavBar.js';
import HomeArticles from './HomeArticles.js';
import AllArticles from './AllArticles.js';
import ArticleById from './ArticleById.js';
import TopicsArticles from './TopicsArticles.js'
import { Route, BrowserRouter} from 'react-router-dom';
import UserComp from './UserComp.js';
import WeatherComp from './WeatherComp';
import './App.css';
// import 'bulma/css/bulma.css'

class App extends Component {


  
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <header className="App-header">
            <div className="header-logo-div">
          
            </div>
            <div className="header-h1-div">
               <h1>Northcoders News</h1>
            </div>
        </header>
        <NavBar/>

        <WeatherComp/>
        
        <div className="main-content">
              <Route exact path="/" component={HomeArticles} />
              <Route exact path="/articles" component={AllArticles} />
              <Route exact path="/articles/:article_id" component={ArticleById} />
              <Route exact path="/topics/:topic/articles" component={TopicsArticles} />
              <Route exact path="/users/:username" component={UserComp} />
           
 
     
        </div>
      <footer>
        <div className="footer-div">
             <a href="https://github.com/jenniredfield"><i className="fa fa-github" aria-hidden="true"></i></a>
            <p>Created by JBird</p>
        </div>
      </footer>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
