import React from 'react';
import GeneralInfo from './components/general';
import EduInfo from './components/education';
import './CSS/App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="display">
          <GeneralInfo />
          <EduInfo />
        </div>
      </div>
    );
  }
}

export default App;
