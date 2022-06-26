import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '../components/App';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
