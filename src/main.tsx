import React from 'react';
import ReactDOM from 'react-dom/client';
import '@mantine/core/styles.css';
import 'swiper/css';
import './index.css';
import Provider from './providers';

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <Provider />
    </React.StrictMode>
  );
} else {
  console.error('Root element not found');
}
