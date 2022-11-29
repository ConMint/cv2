import React from 'react';
import '../CSS/Field.css';

class Field extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.title,
      formName: this.props.title + 'Form',
    };
  }
  changeText = (e) => {
    this.setState({ text: e.target.value });
  };
  submitAnswer = (e) => {
    e.preventDefault();
    document.getElementById(this.state.formName).style.display = 'none';
  };
  editText = () => {
    document.getElementById(this.state.formName).style.display = 'unset';
  };
  render() {
    return (
      <div className="generalInformation">
        <h1>{this.state.text}</h1>
        <button onClick={this.editText}>Edit</button>
        <form id={this.state.formName} onSubmit={this.submitAnswer}>
          <label>
            <input type="text" onChange={this.changeText}></input>
          </label>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}

export default Field;
