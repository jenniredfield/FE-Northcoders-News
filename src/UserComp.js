import React from 'react';
import { Link } from 'react-router-dom';



class UserComp extends React.Component {


    state = {
        user: this.props.match.params.username,
        body: {},
    }

    componentDidMount() {
        this.fetchUser();
    }

    fetchUser = () => {

        fetch(`https://northcoders-news-api.herokuapp.com/api/users/${this.state.user}/`)
            .then(resBuffer => {
                return resBuffer.json();
            }).then(res => {

                this.setState({
                    body: res.users[0]
                })


            })

    }

    render() {
        console.log(this.state.body)
        
        return (

            <div className="user-div">
                <div className="user-grid1"><img src={this.state.body.avatar_url} alt="user-picture" /> </div>
                <div className="user-grid2">
                    <h3>{this.state.body.name}</h3>
                    <h3 className="p-small">{this.state.user}</h3>
                </div>
            </div>

        )

    }




}




export default UserComp;