import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {fetchTopics} from './api.js'

class NavBar extends Component {

    state = {
        topics: [],
    }

    componentDidMount(){
        fetchTopics().then(topics => {
            this.setState({
                topics : topics
            })
        })
    }


    

    render () {

        return (


                <nav>
                    <ul>
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