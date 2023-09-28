import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Paper from './Components/Paper';


const RouterModule = () => {
  return (
    <Router>
      <Routes>
        <Route path="/itc505/homework/3" element={<Paper />} />
      </Routes>
    </Router>
  );
}

export default RouterModule; 