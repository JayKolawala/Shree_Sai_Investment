import Body from './Components/Body';
import FamilyProtection from './pages/FamilyProtection';
import RetirementPlanning from './pages/RetirementPlanning';
import DreamVacation from './pages/DreamVacation';
import DreamCar from './pages/DreamCar';
import ChildEducation from './pages/ChildEducation';
import Wedding from './pages/Wedding';
import DreamHome from './pages/DreamHome';
import CustomGoal from './pages/CustomGoal';
import Header from './Components/Header';
import Footer from './Components/Footer';
import SIP from './pages/SIP';
import EMI from './pages/EMI';
import Crorepati from './pages/Crorepati';
import MutualFunds from './pages/MutualFunds';
import LifeInsurance from './pages/LifeInsurance';

import HealthInsuarance from './pages/HealthInsurance';
import FixDeposite from './pages/FixDeposite';

import './pages/calculator.css';

import './pages/style.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';

 function App() 
  {
    return (
      <>
      <Header />
        <Routes>
          <Route path="/" element={<Body />} index/>
          <Route path="/FamilyProtection" element={<FamilyProtection />} />
          <Route path="/RetirementPlanning" element={<RetirementPlanning />} />
          <Route path="/DreamVacation" element={<DreamVacation />} />
          <Route path="/DreamCar" element={<DreamCar />} />
          <Route path="/ChildEducation" element={<ChildEducation />} />
          <Route path="/Wedding" element={<Wedding />} />
          <Route path="/DreamHome" element={<DreamHome />} />
          <Route path="/CustomGoal" element={<CustomGoal />} />
          <Route path="/SIP" element={<SIP />} />
          <Route path="/EMI" element={<EMI />} />
          <Route path="/Crorepati" element={<Crorepati />}/>
          <Route path="/MutualFunds" element={<MutualFunds />} />
          <Route path="/LifeInsurance" element={<LifeInsurance/>}/>
          <Route path="/HealthInsurance" element={<HealthInsuarance/>}/>
          <Route path="/FixDeposite" element={<FixDeposite/>}/>
          

        </Routes>
        {/* <Map /> */}
        <Footer />
      </>
       
  );
  };

  
export default App;
