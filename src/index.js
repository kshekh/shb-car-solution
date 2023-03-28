import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './index.css';
import './assets/css/app.scss';
import './assets/fonts/fonts.css';
import 'typeface-dm-sans';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import Layout from "./pages/layout";
import Home from "./pages/home"; 

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />  
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
