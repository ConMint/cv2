import React from 'react';
import Field from './field';

class GeneralInfo extends React.Component {
  render() {
    return (
      <div>
        General Information
        <Field className="fields" title="Name" />
        <Field className="fields" title="Email" />
        <Field className="fields" title="Phone number" />
      </div>
    );
  }
}

export default GeneralInfo;
