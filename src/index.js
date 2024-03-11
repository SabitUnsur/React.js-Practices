import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


//Burası, react dom render edilir ve componentlerin ekrana yazdırılmasını sağlar.
//web ortamında reactı kullanmak icin react dom kullanılır.
//tüm componentler app.js dosyasında bulunur. Route işlemleri de burada yapılır.