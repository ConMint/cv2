import React from 'react';
import '../CSS/GeneralField.css';

class GenField extends React.Component {
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

  removeItem = (e) => {
    e.currentTarget.parentNode.remove();
  };
  render() {
    return (
      <div className="generalInformation">
        {/* <button onClick={this.removeItem}>a</button> */}
        <h3 className="inputText">{this.state.text}</h3>
        <button id="editButton" onClick={this.editText}>
          Edit
        </button>
        <form id={this.state.formName} onSubmit={this.submitAnswer}>
          <label>
            <input
              type="text"
              placeholder={this.props.title}
              onChange={this.changeText}
            ></input>
          </label>
        </form>
      </div>
    );
  }
}

export default GenField;
