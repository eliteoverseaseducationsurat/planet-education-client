import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HelmetProvider } from 'react-helmet-async';

// Middleware to redirect non-www to www (301 Permanent Redirect)
app.use((req, res, next) => {
  const host = req.headers.host;
  
  // Check if request is coming to the non-www domain
  if (host === 'planeteducationsurat.in') {
    return res.redirect(301, `https://www.planeteducationsurat.in${req.originalUrl}`);
  }
  
  next();
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
    <App />
    </HelmetProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
