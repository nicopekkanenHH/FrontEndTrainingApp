
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import CustomerList from './pages/CustomerList';
import TrainingList from './pages/TrainingList';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/customers" element={<CustomerList />} />
        <Route path="/trainings" element={<TrainingList />} />
      </Routes>
    </Router>
  );
};

export default App;
