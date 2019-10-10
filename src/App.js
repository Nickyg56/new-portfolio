import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import AboutMe from './Components/AboutMe/AboutMe';
import Projects from './Components/Projects/Projects';


class App extends React.Component {




  render(){
    return (
      <div className="App">
        <Header />
        <AboutMe /> 
        <Projects />
      </div>
    );
  }
  
}

export default App;
