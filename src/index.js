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
import StepOne from './components/Steps/StepOne';
import StepTwo from './components/Steps/StepTwo';
import StepThree from './components/Steps/StepThree';
import StepFour from './components/Steps/StepFour';
import Step1 from './pages/step-1';
import Step2 from './pages/step-2';
import Step3 from './pages/step-3';
import Step4 from './pages/step-4';

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
        {/* <Route path="/stepOne" index element={<StepOne />} />
        <Route path="/stepTwo" index element={<StepTwo />} />
        <Route path="/stepThree" index element={<StepThree />} />
        <Route path="/stepFour" index element={<StepFour />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
