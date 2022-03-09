import React from 'react';
import './App.css';
import Modal from 'react-modal';
import Calendar from "./Components/Calendar";

Modal.setAppElement('#root');

function App() {
  return (
   <Calendar/>
  );
}

export default App;
