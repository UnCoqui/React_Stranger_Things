import React, {useState} from 'react';
import ReactDOM from 'react-dom';


import {
 
    Title
  } from './components';


const App = () => {
  return <div className="app">
   
 <Title />

  </div>
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);