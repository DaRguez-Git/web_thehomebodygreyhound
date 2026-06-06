import React from 'react'
import ReactDOM from 'react-dom/client'
import WoodshedApp from './WoodshedApp.jsx'
import './index.css'
import { LanguageProvider } from './i18n.jsx'

const TITLES = {
  es: 'Woodshed — The Homebody Greyhound',
  en: 'Woodshed — The Homebody Greyhound',
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider titles={TITLES}>
      <WoodshedApp />
    </LanguageProvider>
  </React.StrictMode>,
)
