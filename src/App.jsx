import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Main from './Components/Main'
import Footer from './Components/Footer'
import About from './Components/About'
import Map from './Components/Map'
import Market from './Components/Market'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

      <Navbar />
      <Main />
      <About />
      <Market />
      <Map />
      <Footer />
    </div>
  )
}

export default App
