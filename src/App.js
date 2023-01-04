import React from 'react';
import GeneralInfo from './components/general';
import EduInfo from './components/education';
import Work from './components/work';
import './CSS/App.css';

const App = () => {
  return (
    <div className="App">
      <div className="display">
        <div className="general">
          <GeneralInfo />
        </div>
        <div className="EduAndWork">
          <EduInfo />
          <Work />
        </div>
      </div>
    </div>
  );
};

export default App;
