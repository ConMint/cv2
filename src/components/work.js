import React from 'react';
import WorkForm from './workForm';
import '../CSS/GeneralField.css';

class Work extends React.Component {
  state = {
    counter: 0,
    users: [],
  };
  addUser = () => {
    this.setState({
      users: [...this.state.users, <WorkForm title={this.state.counter} />],
      counter: this.state.counter + 1,
    });
  };

  render() {
    return (
      <div className="Education">
        <button id="addBtn" onClick={this.addUser}>
          Add Work
        </button>
        {this.state.users}
        <WorkForm title="Company A"></WorkForm>
      </div>
    );
  }
}

export default Work;
