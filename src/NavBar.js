import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class NavBar extends Component {

    state = {
        topics: [],
    }

    componentDidMount(){
        this.fetchTopics();
    }

    fetchTopics = () => {

        fetch(`https://northcoders-news-api.herokuapp.com/api/topics`)
        .then((resBuffer) => resBuffer.json())
        .then((res) => {
            this.setState({
                topics: res.topics,
              
            });
    
        })
        .catch(console.log);
    
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
                                <div className="topics-li-div">
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