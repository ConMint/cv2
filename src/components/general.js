import React from 'react';
// import Field from './field';
import GenField from './generalField';

class GeneralInfo extends React.Component {
  render() {
    return (
      <div>
        <GenField className="fields" title="Name" />
        <GenField className="fields" title="Email" />
        <GenField className="fields" title="Phone number" />
      </div>
    );
  }
}

export default GeneralInfo;
