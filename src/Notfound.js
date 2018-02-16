import React from 'react';

class Notfound extends React.Component {

  render() {
     
    return (
       
      <div className="not-found">
        <h1>Sorry, the page you are looking for does not exist</h1>
        <img src="https://www.elegantthemes.com/blog/wp-content/uploads/2017/07/404-error.png" alt='404' width="200" style={{marginTop: '50px' }}/>
      </div>

    );

  }

}

export default Notfound;