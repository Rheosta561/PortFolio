import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'

function App() {
  return (
    <div>
      <Navbar/>
      <div id="home"><Home/></div>
<div id="about"><About/></div>
<div id="projects"><Projects/></div>
<div id="contact"><Contact/></div>

    </div>
  )
}

export default App