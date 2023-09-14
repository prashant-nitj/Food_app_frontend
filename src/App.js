import React from 'react';
import Signup from './Components/Login Page/Signup';
import Home from './Components/Home Page/Home';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Note the import here
import NavBar from './Components/Home Page/NavBar';
import Footer from './Components/Home Page/Footer';
import Login from './Components/Login Page/Login';
import ForgetPassword from './Components/Login Page/ForgetPassword';
import ResetPassword from './Components/Login Page/ResetPassword';
import AllPlans from './Components/Plan Page/AllPlans';
import AuthProvider from './Components/Context/AuthProvider';
import Profile from './Components/Profile Page/Profile';
import PlanDetail from './Components/PlanDetail Page/PlanDetail';

function App() {
  return (
    <Router>
      <AuthProvider>
        <NavBar />
        <Routes> {/* Use Routes consistently */}
          <Route path="/signup" element={<Signup />} /> {/* Specify the element prop */}
          <Route path="/login" element={<Login />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/allPlans" element={<AllPlans />} />
          <Route path="/profilePage" element={<Profile />} />
          <Route path="/planDetail/:id" element={<PlanDetail />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </Router>
  );
}

export default App;
