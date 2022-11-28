import React from 'react';
import GeneralInfo from './components/general';
import Car from './components/car';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        Ball saka
        <GeneralInfo name="Mr.Balls" />
        <GeneralInfo name="Mista CUnto" />
        <Car title="Name" />
        <Car title="Age" />
        <Car title="Years of experience" />
      </div>
    );
  }
}

export default App;
