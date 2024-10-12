import './App.css';
import Sidenav from './components/sidenav';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Profile from './pages/profile/profile';
import Admin from './pages/adminSection/admin';
import Notification from './pages/notification/notification';
import Signin from './pages/signin/signin';
import Signup from './pages/signup/signup';

export default function App() {
  return (
    <div className="App">
    {window.location.pathname !== '/signin' && window.location.pathname !== '/signup' && <Sidenav />}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/notification" element={<Notification />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      {/* Add more routes as needed */}
    </Routes>
  </div>
  );
}

