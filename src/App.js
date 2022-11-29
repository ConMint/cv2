import React from 'react';
import GeneralInfo from './components/general';
import EduInfo from './components/education';
import './CSS/App.css';
import EduForm from './components/EduForm';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="display">
          <GeneralInfo />
          <EduInfo />
          <EduForm />
        </div>
      </div>
    );
  }
}

export default App;
