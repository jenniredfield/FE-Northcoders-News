import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {fetchTopics} from './api.js'

class NavBar extends Component {

    state = {
        topics: [],
        burgerClicked: false,
        
    }

    componentDidMount(){
        fetchTopics().then(topics => {
            this.setState({
                topics : topics
            })
        })
    }

    handleBurger = () => {
        this.setState({
            burgerClicked: this.state.burgerClicked ? false : true,
        })
    }
    

    render () {
        console.log(window.innerWidth)
        return (


                <nav>
                    <div className="burger-nav" onClick={this.handleBurger}><i className="fa fa-bars" aria-hidden="true"></i></div>
                    <ul className={this.state.burgerClicked ? 'display' : ''}>
                        <div className="topics-li-div">
                           <Link to="/"><li>Home</li></Link>
                        </div>
                        <div className="topics-li-div">
                           <Link to="/articles"><li>All Articles</li></Link>
                        </div>
                        { this.state.topics.map((topic, i) => {
                            return (
                                <div className="topics-li-div" key={i}>
                                   <Link to={`/topics/${topic.slug}/articles`}> <li key={i}>{topic.title}</li></Link>
                                </div>
                            )
                        })}
                    </ul>
                </nav>

        )
    }
}

export default NavBar;