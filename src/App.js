import React from 'react';
import './App.css';
// Importing a component from a component folder, so we can return it
import Header from './components/Header/Header.js';

// All we want to render to the screen
export default function App() {
  return (
    <div>
      <Header />
    </div>
  );
}
