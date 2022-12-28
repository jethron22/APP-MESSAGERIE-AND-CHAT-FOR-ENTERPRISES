
import './App.css';
import Chat from './Chat/Chat';
import Login from './Login';
import {Router, Routes, Route, Navigate} from 'react-router-dom'
// import Home from './Home';
// import Navigation from './Navigation';
// import CardMessage from './CardMessage';
// import HomePage from './HomePage'

function App() {

  return (
    <div>
      
<Routes>
  <Route path='/' element = {<Navigate to="/login" replace />}/> 
  <Route path="/chat" element={ <Chat />} />
  <Route path="/login" element={ <Login />} />
</Routes>
    </div>
    
  )
}

export default App;
