import React from 'react';

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.title,
      formName: this.props.title + 'Form',
    };
  }
  changeText = (event) => {
    this.setState({ text: event.target.value });
  };
  submitAnswer = (e) => {
    e.preventDefault();
    document.getElementById(this.state.formName).style.display = 'none';
  };
  render() {
    return (
      <div>
        <h1>{this.state.text}</h1>
        <form id={this.state.formName} onSubmit={this.submitAnswer}>
          <label>
            {this.props.title + ':'}
            <input type="text" onChange={this.changeText}></input>
          </label>
          <input type="submit" value="submit"></input>
        </form>
      </div>
    );
  }
}

export default Car;
