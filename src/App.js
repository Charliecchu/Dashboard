import React from 'react';
import './App.css';
import Dashboard from './Components/Dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserDetail from './Components/UserDetail';
import { Link } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Link to="/" className="header-link">
            User Dashboard
          </Link>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users/:userId" element={<UserDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;



