import React from 'react';
import EduForm from './EduForm';

class EduInfo extends React.Component {
  state = {
    counter: 0,
    users: [],
  };
  addUser = () => {
    this.setState({
      users: [...this.state.users, <EduForm title={this.state.counter} />],
      counter: this.state.counter + 1,
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
