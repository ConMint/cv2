import React from 'react';

class ProfPic extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img
          id="avatar"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"
          alt="Avatar"
          height="100"
        />
      </div>
    );
  }
}

export default ProfPic;
