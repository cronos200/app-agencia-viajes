import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PanelControl from './PanelControl.jsx'
import Reservas from './Reservas.jsx'
import Login from './pages/Login.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PanelControl />
    <Reservas />
  </StrictMode>,
)
