import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import DashBoard from './components/DashBoard';
import Services from './pages/Services';
import Header from './components/Header';
import Navaigation from './components/navaigation';
import Profile from './pages/Profile';
import Footer from './components/Footer';
import Notification from './pages/Notification';
import ServiceDetails from './pages/ServiceDetails';

function App() {
  return (
    <>
    <Router>
      <Routes>
        
        <Route path="/" element={<Login />} />
        <Route path="/dashBoard" element={<DashBoard />} />
        <Route path='/Services' element={<Services />} />
        <Route path="/services/:id" element={<ServiceDetails/>} />
        <Route path='/Header' element={<Header />} />
        <Route path='/Footer' element={<Footer />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/navaigation" element={<Navaigation />} />
        <Route path="/Notification" element={<Notification />} />
        {/* <Route path="/EditService" element={<EditService />} /> */}
        {/* Add more routes as needed */}
      </Routes>
    </Router>
    </>
  );
}

export default App;
