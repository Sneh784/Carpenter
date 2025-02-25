import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AboutusPage from './pages/AboutusPage'
import ServicesPage from './pages/ServicesPage'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import ScrollTop from './components/scrolltop/ScrollTop'
import BlogPage from './pages/BlogPage'
function App() {
  return (
    <>
    
    <Navbar/>
     <ScrollTop/>
    <Routes>
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/aboutus" element={<AboutusPage/>}/>
      <Route path="/services" element={<ServicesPage/>}/> 
      <Route path="blog" element={<BlogPage/>}/>
       <Route path="/contact" element={<ContactPage/>}/>
      </Routes>
      
      <Footer/>
    </>
  )
}

export default App
