import React from 'react';
import { connect } from 'react-redux';
import { getUsersRequest } from './actions/users';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.props.getUsersRequest();
  }

  render() {

    return (
      <div>
        test
      </div>
    );
  }
  
}

export default connect(null, {
  getUsersRequest
})(App);
