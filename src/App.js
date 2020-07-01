import React from 'react';
import './App.css';
import Profile from './Content/Profile';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';


const App = () => {
  return (
    <div className='app-wrapper'>
      <Header/>
      <Navbar/>
      <Profile />      
    </div>

  );
}

export default App;
