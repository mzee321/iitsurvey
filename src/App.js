import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./global/NavBar";
import LandingPage from './components/Landingpage';
import OfficeSurvey from './components/OfficeSurvey';
import HeaderTest from './global/NavBarQuest';
import Testlang from './components/testlang';
function App() {
  return (
    <Router> 
      <Routes>
        <Route path="/headertest" element={<HeaderTest />} />
        <Route path="/clientsurvey" element={<LandingPage />} />
        <Route path="/office/:officeId" element={<OfficeSurvey />} />
        <Route path="/test" element={<Testlang />} />
      </Routes>
    </Router>
  );
}

export default App;
