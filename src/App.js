import React from 'react';
// Importing a component from a component folder, so we can return it
import Navbar from './components/Navbar';

// All we want to render to the screen
export default function App() {
  return (
    <div>
      <Navbar />
    </div>
  );
}
