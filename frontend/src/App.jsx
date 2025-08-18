import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Footer from "./components/Footer";
import About from "./pages/inner-pages/About";
import Blog from "./pages/inner-pages/Blog";
import Pricing from "./pages/inner-pages/Pricing";
import Contact from "./pages/inner-pages/Contact";
import AdminLayout from "./components/AdminLayout";
import './App.css';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />

        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />

        {/* Admin Nested Routes */}
        <Route path="/admin" element={<AdminLayout />}>
         
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
