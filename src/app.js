import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/homepage';
import HomeHealthcare from './pages/HomeReferralPage';
import InvoiceProcessing from './pages/invoiceprocessing';
import ChatWithPDF from './pages/Chatpdf';
import ImmigrationInfo from './pages/immigrationinfo';
//import DamageDetection from './pages/DamageDetection';
import Nucleous from "./pages/nucleous";
import Header from './components/header';

function App() {
  return (
    <>
    <Header/>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home-healthcare" element={<HomeHealthcare />} />
        <Route path="/invoice-processing" element={<InvoiceProcessing />} />
        <Route path="/chat-pdf/*" element={<ChatWithPDF />} />
        <Route path="/immigration-info" element={<ImmigrationInfo />} />
        <Route path="/nucleon_health" element={<Nucleous/>}/>



      </Routes>
    </Router>
    </>
  );
}

export default App;

