import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Apply tailwind stylings
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
