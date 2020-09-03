import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Routes from './Routes';


function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <Routes/>
    </div>
  );
}

export default App;
