import React from "react";
import ReactDOM from 'react-dom/client'
import './styles.css'
import { JournalApp } from "./JournalApp";
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <React.StrictMode>
    <JournalApp />
  </React.StrictMode>
)