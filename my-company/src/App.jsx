import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Services from './components/Services';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Services' element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;