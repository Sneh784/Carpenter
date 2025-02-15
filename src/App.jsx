import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AboutusPage from './pages/AboutusPage'
import ServicesPage from './pages/ServicesPage'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import ContactPage from './pages/ContactPage'
import ScrollTop from './components/scrolltop/ScrollTop'
function App() {
  return (
    <>
    
    <Navbar/>
     <scrollTop/>
    <Routes>
      <Route path="/aboutus" element={<AboutusPage/>}/>
      <Route path="/services" element={<ServicesPage/>}/> 
       <Route path="/contact" element={<ContactPage/>}/>
      </Routes>
      
      <Footer/>
    </>
  )
}

export default App
