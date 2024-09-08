// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
} else {
  console.error('Root element not found');
}
