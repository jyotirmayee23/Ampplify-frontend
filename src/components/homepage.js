import React from 'react';
import { Container, Typography } from '@mui/material';
import '../styles/app.css';
import recruit from "../assets/recruit.svg"
import pdf from "../assets/pdf.svg"
import invoice from "../assets/invoice.svg"
import damage from "../assets/damage.svg"
import bot from "../assets/bot.svg"
import health from "../assets/health.svg"
import immigration from "../assets/immigration.svg"
import dashboard from "../assets/dashboard.svg"

const HomePage = () => {
  const applications = [
    { name: 'Recruiter AI', path: 'https://recruiterai.operisoft.com/', icon:recruit },
    { name: 'OperiBot', path: 'https://voiceapi.operisoft.com/', icon:bot },
    { name: 'Healthcare Referral Summary', path: '/home-healthcare', icon:health },
    { name: 'Invoice Processing', path: '/invoice-processing', icon:invoice },
    { name: 'Damage Detection', path: 'http://43.205.185.17:5002/', icon:damage },
    { name: 'Health Dashboard', path: 'https://health.operisoft.com', icon: dashboard },
    { name: 'Immigration Extraction', path: '/immigration-info', icon:immigration },
        { name: 'Chat with PDF', path: '/chat-pdf', icon:pdf },
  ];

  return (
    <Container>
      <div className="home-wrapper">
        <Typography variant="h4" className="heading-badge">Our Generative AI Solution</Typography>
        <Typography variant="h5" className="section-subtitle">Select an application</Typography>

        <div className="card-container">
          {applications.map((app, index) => (
            <div className="app-card" key={index}>

              <img className="card-icon" src={app.icon} alt='logo'></img>
              <div className="card-content">
              <div className="card-title">{app.name}</div>
              <a href={app.path} target="_blank" rel="noopener noreferrer" className="card-button">
                Find out more
              </a></div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
