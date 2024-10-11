import './App.css';
import Sidenav from './components/sidenav';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Profile from './pages/profile/profile';

function App() {
  return (
    <div className="App">
    {window.location.pathname !== '/signin' && window.location.pathname !== '/signup' && <Sidenav />}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      {/* <Route path="/signin" element={<SignIn />} /> */}
      {/* <Route path="/signup" element={<SignUp />} /> */}
      {/* Add more routes as needed */}
    </Routes>
  </div>
  );
}

export default App;
