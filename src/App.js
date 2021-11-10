import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Main from './Main';

function App() {
  return (
 <Router>
      <Route component={Main} />
 </Router>
  );
}

export default App;
