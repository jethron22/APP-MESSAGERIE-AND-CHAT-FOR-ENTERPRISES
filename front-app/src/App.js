import logo from './logo.svg';
import './App.css';
import Login from './Login';

import axios from 'axios';

function App() {

  axios.get('http://localhost:2706/users')
  .then((res)=> console.log(res.data))
  .catch((err)=> console.log("erreur" + err))

  return (

      <Login />

  )
}

export default App;
