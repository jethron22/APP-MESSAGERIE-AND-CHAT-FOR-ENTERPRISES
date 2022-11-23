import './App.css';
import Login from './Login';
import Home from './Home';
import Navigation from './Navigation';
import MessageCard from './CardMessage';
import { Route } from 'react-router-dom';

import Navbar from './Navbar';

function App() {

  return (
    <div>
      {/* <Login /> */}
      <Navbar/>
      <Navigation />
      <CardMessage />
      <Home />
     
    </div>
    
  )
}

export default App;
