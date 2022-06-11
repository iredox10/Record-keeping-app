import './App.css';
import Home from './pages/Home'
import Login from './pages/Login'
import Transaction from './pages/Transaction';
import UserPage from './pages/UserPage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Credit from './pages/Credit';
import Customer from './pages/Customer';


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
          <Route path='/customer-credits/:id' element={<Customer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
