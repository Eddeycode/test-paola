import logo from './logo.svg';
import './App.css';
import Navbar from './header/Navbar.js';
import Body from './pages/home.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home.js';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
