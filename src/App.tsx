import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import ChatBotInterface from './components/ChatBotInterface';
// import About from './pages/About';
// import Contact from './pages/Contact';

const App: React.FC = () => {

  return (
    <>
      <ChatBotInterface/>
    </>
  )
}

export default App
