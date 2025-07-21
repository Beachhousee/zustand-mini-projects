import React from 'react';
import useAuthStore from '../store/authStore';
import { useNavigate } from 'react-router-dom';
import { useStore } from 'zustand';


const Home:React.FC = () => {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout=()=>{
    logout();
    navigate('/login')
  }
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>👋 Welcome, {user?.name}!</h1>
      <p>Email: {user?.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;