import React from 'react'
import ReactDOM from 'react-dom/client'
import OficioApp from './OficioApp.jsx'
import './index.css'
import { LanguageProvider } from './i18n.jsx'

const TITLES = {
  es: 'Oficio — The Homebody Greyhound',
  en: 'Oficio — The Homebody Greyhound',
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider titles={TITLES}>
      <OficioApp />
    </LanguageProvider>
  </React.StrictMode>,
)
