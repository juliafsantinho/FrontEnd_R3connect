import React from 'react';
import './App.css';
import Navbar from './componentes/estaticos/navbar/Navbar';
import Footer from './componentes/estaticos/footer/Footer';
import Home from './paginas/home/Home';

function App() {
  return (
    <>
        <Navbar />
        <Home />
        <Footer />
    </>
  );
}

export default App;
