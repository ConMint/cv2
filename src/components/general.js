import React from 'react';

class GeneralInfo extends React.Component {
  render() {
    return (
      <form>
        <label>
          Name:
          <input type="text" value={this.props.name}></input>
        </label>
      </form>
    );
  }
}

export default GeneralInfo;
