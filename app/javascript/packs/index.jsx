import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '../components/App';

const container = document.getElementById('root');
const props = {
  loggedIn: JSON.parse(container.getAttribute('logged_in'))
};

const root = createRoot(container);
root.render(<App {...props} />);
