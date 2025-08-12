import React from 'react'
import Navbar from './component/Navbar'
import Home from './page/Home'
import Footer from './component/Footer'
import WhatsAppChat from './component/WhatsAppChat'
const App = () => {
  return (
    <div >
      <Navbar/>
      <WhatsAppChat/>
      <Home />
      <Footer/>
    </div>
  )
}

export default App