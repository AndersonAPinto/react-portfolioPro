import NavBar from './components/Layout/NavBar.jsx';
import Home from './components/Pages/Home.jsx';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
    return(
      <Router>
        <NavBar/>
        <Home/>
      </Router>
    )
}

export default App;
