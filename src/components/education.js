import React from 'react';
import Field from './field';

class EduInfo extends React.Component {
  state = {
    users: [],
  };
  addUser = () => {
    this.setState({
      users: [...this.state.users, <Field />],
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.addUser}>Add User</button>
        {this.state.users}
      </div>
    );
  }
}

export default EduInfo;
