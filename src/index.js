import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App 
      name={"Diego Cravo"} 
      primeira={"Essa props será renderizada no App.js"}
      segunda={"Essa props será renderizada no ComponenteFilho.js"}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

