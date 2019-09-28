import React from 'react';
import './App.css';
import PersonList from './components/PersonList';
import PersonInput from './components/PersonInput';

function App() {
  return (
    <div className="App">
      <PersonList />
      <PersonInput />
    </div>
  );
}

export default App;
