import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, 
document.getElementById('root'))


// This was used in the 'page re-rendering' section
/*
let counter = 1

const refresh = () => {
  ReactDOM.render(<App counter={counter} />,
  document.getElementById('root'))
}

setInterval(() => {
  refresh()
  counter++
}, 1000)
*/