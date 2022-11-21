import React, { useState, useEffect} from 'react'
import axios from 'axios';
import './UsersSidebar.css'


function Home() {

    const urlDeBase = 'http://localhost:2707/Users'
    
    const [users, setAllUsers] = useState(null)

    useEffect(() => {

      axios.get(urlDeBase).then((res) => {
        
        setAllUsers(res.data.users)
      });
    }, [])
  return (
    <div>
      <div className='AllUsers'>
      {users ? users.map(user => (
        <div className='blockUsers'>
          <p className='userName'>{user.nom} {user.postnom}</p>
        </div>

)): (<div>Pas d'utilisateur pour le moment</div>)}
    </div>
</div>
  )
}

export default Home