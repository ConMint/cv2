import React from 'react';
import '../CSS/Field.css';
import '../CSS/GeneralField.css';

class WorkForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: this.props.title,
      role: 'Role',
      date: 'Date',
      formName: this.props.title + 'Form',
    };
  }

  changeName = (e) => {
    this.setState({ companyName: e.target.value });
  };
  changeRole = (e) => {
    this.setState({ role: e.target.value });
  };
  changeDate = (e) => {
    this.setState({ date: e.target.value });
  };

  submitAnswer = (e) => {
    e.preventDefault();
    const inputz = document.getElementsByClassName(this.state.formName);
    for (var i = 0; i < inputz.length; i++) {
      inputz.item(i).style.display = 'none';
    }
  };
  editText = () => {
    const inputz = document.getElementsByClassName(this.state.formName);
    for (var i = 0; i < inputz.length; i++) {
      inputz.item(i).style.display = 'unset';
    }
  };

  removeItem = (e) => {
    e.currentTarget.parentNode.remove();
    document.getElementById(this.state.formName).remove();
  };
  render() {
    return (
      <div className="eduWorkInformation">
        <div className="one">
          <h3 className="inputText">{this.state.companyName}</h3>
          <h3 className="inputText">{this.state.role}</h3>
          <h3 className="inputText">{this.state.date}</h3>
          <button id="editButton" onClick={this.editText}>
            Edit
          </button>
          <button onClick={this.removeItem}>Delete</button>
        </div>
        <div className="two">
          <form
            className={this.state.formName}
            id={this.state.formName}
            onSubmit={this.submitAnswer}
          >
            <label>
              <input
                type="text"
                placeholder="Name Of Company"
                onChange={this.changeName}
              ></input>
              <input
                type="text"
                placeholder="Role"
                onChange={this.changeRole}
              ></input>
              <input type="date" onChange={this.changeDate}></input>
              <input type="submit" value="Submit"></input>
            </label>
          </form>
        </div>
      </div>
    );
  }
}
export default WorkForm;
