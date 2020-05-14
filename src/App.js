import React, { Component } from 'react';
import './index.css';
import TopicBrowser from './components/TopicBrowser/TopicBrowser';

class App extends Component {
  render() {
    return(
      <TopicBrowser/>
    )
  }
}

export default App;


//is this type of file (the main parent) usually called App.js? are there other ways of naming that would be more informative? 