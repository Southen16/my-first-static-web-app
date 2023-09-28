import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Font from './components/Font';

const RoutesTree = () => {
  return (
    <Router>
      <Routes>
        <Route path="/itc505/homework/3" element={<Font />} />
      </Routes>
    </Router>
  );
}

export default RoutesTree;