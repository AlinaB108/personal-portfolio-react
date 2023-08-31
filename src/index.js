import React from 'react';
import ReactDOM from 'react-dom';
// Importing app.js
import App from './App';
// Telling virtual DOM to render the app component to the element with the id of 'root' (in this case <div></div>)
ReactDOM.render(<App />, document.getElementById('root'));
