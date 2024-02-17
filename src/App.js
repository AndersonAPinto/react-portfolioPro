import Dropdown from './components/Layout/Dropdown.jsx';
import NavBar from './components/Layout/NavBar.jsx';
import AboutMe from './components/Pages/AboutMe.jsx';
import Home from './components/Pages/Home.jsx';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
    return(
      <Router>
        <Dropdown />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
        </Routes>
      </Router>
    )
}

export default App;
