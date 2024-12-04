import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Tasks from './components/Tasks';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
    console.log('Search Query:', query);
  };

  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <Navbar onSearch={handleSearch} />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tasks" element={<Tasks searchQuery={searchQuery} />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
