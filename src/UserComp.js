import React from 'react';
import {fetchUser} from './api.js';



class UserComp extends React.Component {


    state = {
      user: this.props.match.params.username,
      body: {},
    }

    componentDidMount() {
      fetchUser(`${this.state.user}`).then(user => { 
        this.setState({
          body: user,
        });
      });
    }


    render() {
     
      return (

        <div className="user-div">
          <div className="user-grid1"><img src={this.state.body.avatar_url} alt="user-logo" /> </div>
          <div className="user-grid2">
            <h3>{this.state.body.name}</h3>
            <h3 className="p-small">{this.state.user}</h3>
          </div>
        </div>

      );

    }




}




export default UserComp;