import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'primereact/resources/themes/arya-blue/theme.css'
import 'primeflex/primeflex.min.css'
import 'primeicons/primeicons.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
