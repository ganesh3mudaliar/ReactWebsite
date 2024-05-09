import './App.css';
import Navbar from './Components/Navbar';
import Boxes from './Components/Boxes';
import Loginpg from './Components/Loginpg';
import Webdev from './Components/Webdev';
import Appdev from './Components/Appdev';
import Github from './Components/Github';
import Cloud from './Components/Cloud';
import Footer from './Components/Footer';
import Signup from './Components/Signup';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        

          <Navbar />

          <Routes>
            <Route path="/" element={<Loginpg />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="Boxes" element={<Boxes />}/> 
            <Route path="Boxes/Webdev" element={<Webdev />} />
            <Route path="Boxes/Appdev" element={<Appdev />} />
            <Route path="Boxes/Github" element={<Github />} />
            <Route path="Boxes/Cloud" element={<Cloud />} />
            


          </Routes>

          <Footer />
        
      </Router>
    </>
  );
}

export default App;

