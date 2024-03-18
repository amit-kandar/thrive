import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './router';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <AppRouter />
      </div>
    </Router>
  );
}

export default App;