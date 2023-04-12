import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Entry } from './Entry';
import './index.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <div className='h-screen font-serif text-white bg-gray-900 grid place-items-center'>
      {/* <App /> */}
      <Entry />
    </div>
  </BrowserRouter>

);
