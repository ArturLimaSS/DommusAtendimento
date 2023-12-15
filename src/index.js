import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.js';
import './index.css';
import './satoshi.css';
import { UserProvider } from './context/UserContext.jsx';
import { KanbanProvider } from './context/KanbanContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <KanbanProvider>
        <Router>
          <App />
        </Router>
      </KanbanProvider>
    </UserProvider>
  </React.StrictMode>
);
