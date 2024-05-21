// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Assets from './components/Dashboard/Assets';
import Sidebar from './components/Dashboard/SideBar';
import Header from './components/Header/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/asset/login" element={<Login />} />
          <Route path="/asset/dashboard" element={<Dashboard />} />
          <Route path="/asset/dashboard/assets" element={
            <div>
               <Sidebar/>
               <Header/>
              <Assets/> 
            </div>
            } />

          <Route path="/" element={<Navigate to="/asset/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
