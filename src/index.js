import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import AppRedux from './learning/24_redux/app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <BrowserRouter>
  //     <AppMentor />
  //   </BrowserRouter>
  // </React.StrictMode>
  <AppRedux/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
reportWebVitals();
