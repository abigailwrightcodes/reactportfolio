import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavbar from './components/navbar'
import Homepage from './components/1.HomePage/homepage'
import Aboutpage from './components/2.AboutPage/about'
import Portfoliopage from './components/3.PortfolioPage/portfolio'
import Contactpage from './components/4.ContactPage/contact'


function App() {
  return (
    <Router>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="about" element={<Aboutpage />} />
        <Route path="portfolio" element={<Portfoliopage />} />
        <Route path="contact" element={<Contactpage />} />
      </Routes>
    </Router>
  );
}


export default App
