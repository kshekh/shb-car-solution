import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
// import './index.css';
import './assets/css/app.scss';
import './assets/fonts/fonts.css';
import 'typeface-dm-sans';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import Home from "./pages/home";
import Layout from "./pages/layout";
import Profile from "./components/Profile/Profile";
import Step1 from './pages/step-1';
import Step2 from './pages/step-2';
import Step3 from './pages/step-3';
import Step4 from './pages/step-4';
import CurrentBooking from './components/Profile/CurrentBooking';
import TodayVehicles from './components/Employee/TodayVehicles';
import AllBooking from './components/Employee/AllBooking';
import Notification from './components/Employee/Notification';
import NotificationDetails from './components/Employee/NotificationDetails';
import Slide from './components/Administrator/Slide';
import Employee from './components/Administrator/Employee';
import Services from './components/Administrator/Services';

export default function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" index element={<Home />} />
        <Route path="/step-1" index element={<Step1 />} />
        <Route path="/step-2" index element={<Step2 />} />
        <Route path="/step-3" index element={<Step3 />} />
        <Route path="/step-4" index element={<Step4 />} />
        <Route path="/profile" index element={<Profile />} />       
        <Route path="/current-boking" index element={<CurrentBooking />} />       
        <Route path="/today-vehicles" index element={<TodayVehicles />} />       
        <Route path="/all-booking" index element={<AllBooking />} /> 
        <Route path="/notification" index element={<Notification />} /> 
        <Route path="/notification-details" index element={<NotificationDetails />} /> 
        <Route path="/slide" index element={<Slide />} /> 
        <Route path="/employee" index element={<Employee />} /> 
        <Route path="/services" index element={<Services />} /> 
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
