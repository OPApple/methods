import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    
    <div id="top" className='flex h-screen flex-col flex-wrap justify-center items-center'>
        <a className='text-4xl hover:scale-125 duration-150' href='#input'>Equation solver</a>
    </div>
    <App />

    <div className='text-center'>
        <a href='#top'>Back to the top</a>
    </div>
  </React.StrictMode>
);


