import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PanelControl from './PanelControl.jsx'
import Reservas from './Reservas.jsx'
import QuinesSomos from './components/QuienesSomos.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QuinesSomos />
  
  </StrictMode>,
)
