import React from 'react';
import EduForm from './EduForm';

class EduInfo extends React.Component {
  state = {
    users: [],
  };
  addUser = () => {
    this.setState({
      users: [...this.state.users, <EduForm />],
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.addUser}>Add User</button>
        {this.state.users}
        <EduForm title="strathy"></EduForm>
        <EduForm title="JAHNSON"></EduForm>
      </div>
    );
  }
}

export default EduInfo;
