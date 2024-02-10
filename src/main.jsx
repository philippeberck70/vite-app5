import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Layout'
import Home from './components/Home'
import Exercices from './components/Exercices'
import Contact from './components/Contact'
import NoPage from './components/NoPage'
import Exercice from "./components/Exercice"
import Navbar from "./components/Navbar"
import { BrowserRouter, Route, Routes } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/exercices" element={<Exercices />} />
          <Route path="/exercices/:id" element={<Exercice />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
