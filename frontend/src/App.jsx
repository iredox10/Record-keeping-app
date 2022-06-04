import './App.css';
import Home from './pages/Home'
import Login from './pages/Login'
import Transaction from './pages/Transaction';
import UserPage from './pages/UserPage';
import {useState} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Credit from './pages/Credit';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />}  exact />
          <Route path='/log-in' element={<Login />}  />
          <Route path='/manage-transaction/:id' element={<Transaction />}  />
          <Route path='/user-page/:id' element={<UserPage />} />
          <Route path='/manage-credit/:id' element={<Credit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
