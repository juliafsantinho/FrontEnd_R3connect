import React from 'react';
import './App.css';
import Navbar from './componentes/estaticos/navbar/Navbar';
import Footer from './componentes/estaticos/footer/Footer';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';


function App() {
  return (
    <>
        <Navbar />
        <Home />
        <Login />
        <Footer />
    </>
  );
}

export default App;
