import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styles from './components/styles';

const RoutesTree = () => {
  return (
    <Router>
      <Routes>
        <Route path="/itc505/homework/4/styles.css" element={<styles />} />
      </Routes>
    </Router>
  );
}

export default RoutesTree;