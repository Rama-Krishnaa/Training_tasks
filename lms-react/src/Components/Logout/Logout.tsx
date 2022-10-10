import React from 'react'
import '../Logout/Logout.css'
import {useNavigate} from 'react-router-dom'

function Logout() {
  const navigate = useNavigate();
  const handleStorage = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('name');
    localStorage.removeItem('role');
    navigate('/');
  }
  const handleLogout = () => {
    localStorage.getItem('email') ? handleStorage() : alert('You are not logged in');
  }
  // confirm('Are you sure you want to Logout') ?
  // handleLogout()
  // : null;
  return (
    <div id='Logout'>
        <button className='btn-logout' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout
