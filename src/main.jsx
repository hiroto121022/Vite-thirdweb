import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThirdwebProvider } from "thirdweb/react";
 
function AppWithProvider() {
  return (
    <ThirdwebProvider>
      <App />
    </ThirdwebProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppWithProvider />
  </React.StrictMode>,
)
