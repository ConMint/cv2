import React from 'react';
// import Field from './field';
import GenField from './generalField';
import ProfPic from './profPic';
import '../CSS/GeneralField.css';

class GeneralInfo extends React.Component {
  render() {
    return (
      <div className="userInfo">
        <div className="userInfoFields">
          <GenField className="fields" title="Name" />
          <GenField className="fields" title="Email" />
          <GenField className="fields" title="Phone number" />
        </div>
        <div className="userImg">
          <ProfPic />
        </div>
      </div>
    );
  }
}

export default GeneralInfo;
