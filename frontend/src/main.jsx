import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css"; // global Bootstrap
import '@fortawesome/fontawesome-free/css/all.min.css'; // global Font Awesome
import "react-toastify/dist/ReactToastify.css"; // global Toastify
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
