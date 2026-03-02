import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './page/Home'
import Portfolio from './page/Portfolio'
import Footer from './component/Footer'
import WhatsAppChat from './component/WhatsAppChat'

const App = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <WhatsAppChat />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:id" element={<Portfolio />} />
        {/* Dynamic catch-all for service detail buttons if needed */}
        <Route path="/design" element={<Portfolio id="1" />} />
        <Route path="/renovation" element={<Portfolio id="2" />} />
        <Route path="/interior" element={<Portfolio id="3" />} />
        <Route path="/architect" element={<Portfolio id="6" />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App