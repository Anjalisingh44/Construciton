import React from 'react'
import Navbar from './component/Navbar'
import Home from './page/Home'
import Footer
const App = () => {
  return (
    <div className='text-5xl'>
      <Navbar/>
      <Home />
      <Footer/>
    </div>
  )
}

export default App