import React from 'react';
import { Hero, Navbar,Companies, Courses,Footer } from './components';
import './App.css'


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Companies/>
      <Courses />
      
      <Footer />
    </div>
  )
}

export default App