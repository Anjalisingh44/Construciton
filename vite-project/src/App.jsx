import React from 'react'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './page/Home'
import Portfolio from './page/Portfolio'
import Footer from './component/Footer'
import WhatsAppChat from './component/WhatsAppChat'
import Login from './page/Admin/Login'
import AdminDashboard from './page/Admin/AdminPanel'

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  if (!token) return <Navigate to="/login" />;
  return children;
};

const App = () => {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith('/admin') || location.pathname === '/login';

  return (
    <div className="bg-white min-h-screen">
      {!isAdminPage && <Navbar />}
      {!isAdminPage && <WhatsAppChat />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:id" element={<Portfolio />} />
        <Route path="/design" element={<Portfolio id="1" />} />
        <Route path="/renovation" element={<Portfolio id="2" />} />
        <Route path="/interior" element={<Portfolio id="3" />} />
        <Route path="/architect" element={<Portfolio id="6" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
      </Routes>
      {!isAdminPage && <Footer />}
    </div>
  )
}

export default App