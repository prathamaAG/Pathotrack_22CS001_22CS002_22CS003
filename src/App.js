import React from 'react';
import './App.css';
import Navbar from './commoncomponents/navbar/navbar'; // Adjusted path to Navbar.jsn
import Homescreen from './pages/homescreen/homescreen';
import Footer from './commoncomponents/footer/footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Homescreen/>
      <Footer/>
    </div>
  );
}

export default App;
