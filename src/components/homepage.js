import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import '../styles/app.css';

const HomePage = () => {
  const applications = [
    { name: 'Home Healthcare Referral Summary', path: '/home-healthcare' },
    { name: 'Invoice Processing', path: '/invoice-processing' },
    { name: 'Chat with PDF', path: '/chat-pdf' },
    { name: 'Immigration Information Extraction', path: '/immigration-info' },
    { name: 'Damage Detection', path: 'http://43.205.185.17:5002/' },
    { name: 'Health Dashboard and Clinical Assistant', path: 'https://health.operisoft.com' },
    { name: 'Referral Summary', path: '/nucleon_health'}
  ];

  return (
    <Container maxWidth="md">
      <div className="home-wrapper">
        <Typography variant="h4" className="title">
          📂 Operisoft GenAI Projects
        </Typography>
        <Typography variant="h6" className="subtitle">
          Select an Application
        </Typography>
        <div className="button-container">
          {applications.map((app, index) => (
            <Button
              key={index}
              variant="contained"
              className="app-button"
              component="a"
              href={app.path}
              target="_blank"
              rel="noopener noreferrer"
            >
              {app.name}
            </Button>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default HomePage;

