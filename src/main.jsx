import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './index.css';

// High-performance global scroll helper to solve lazy loading issues for CTA buttons
window.scrollToContact = () => {
  const el = document.getElementById("contact");
  if (el) {
    if (window.lenis) {
      window.lenis.scrollTo("#contact", { duration: 1.25 });
    } else {
      el.scrollIntoView({ behavior: "smooth" });
    }
  } else {
    // Force mount all lazy sections instantly
    window.dispatchEvent(new CustomEvent("force-lazy-load"));
    setTimeout(() => {
      const target = document.getElementById("contact");
      if (target) {
        if (window.lenis) {
          window.lenis.scrollTo("#contact", { duration: 1.25 });
        } else {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, 100);
  }
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
