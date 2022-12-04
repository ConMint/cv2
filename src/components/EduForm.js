import React from 'react';
import '../CSS/Field.css';

class EduForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schoolName: this.props.title,
      major: 'Major',
      degree: 'Degree',
      date: 'Date',
      formName: this.props.title + 'Form',
    };
  }

  changeName = (e) => {
    this.setState({ schoolName: e.target.value });
  };
  changeMajor = (e) => {
    this.setState({ major: e.target.value });
  };
  changeDegree = (e) => {
    this.setState({ degree: e.target.value });
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
  };
  render() {
    return (
      <div className="generalInformation">
        <button onClick={this.removeItem}>a</button>
        <h3 className="inputText">{this.state.schoolName}</h3>
        <h3 className="inputText">{this.state.degree}</h3>
        <h3 className="inputText">{this.state.major}</h3>
        <h3 className="inputText">{this.state.date}</h3>
        <button id="editButton" onClick={this.editText}>
          Edifghght
        </button>
        <form className={this.state.formName} onSubmit={this.submitAnswer}>
          <label>
            <input type="text" onChange={this.changeName}></input>
            <input type="text" onChange={this.changeDegree}></input>
            <input type="text" onChange={this.changeMajor}></input>
            <input type="text" onChange={this.changeDate}></input>
            <input type="submit" value="Submit"></input>
          </label>
        </form>
      </div>
    );
  }
}
export default EduForm;
