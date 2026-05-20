import { createContext, useCallback, useContext, useEffect, useState } from 'react'

const LangContext = createContext({
  lang: 'es',
  setLang: () => {},
  toggle: () => {},
})

const STORAGE_KEY = 'thg-lang'

const DOC_TITLE = {
  es: 'The Homebody Greyhound — Ingeniería de software a medida',
  en: 'The Homebody Greyhound — Bespoke software engineering',
}

function readInitialLang() {
  if (typeof window === 'undefined') return 'es'
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === 'es' || stored === 'en') return stored
  } catch {
    /* ignore */
  }
  const nav = window.navigator?.language || ''
  return nav.toLowerCase().startsWith('en') ? 'en' : 'es'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(readInitialLang)

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = DOC_TITLE[lang]
    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      /* ignore */
    }
  }, [lang])

  const toggle = useCallback(() => {
    setLang((current) => (current === 'es' ? 'en' : 'es'))
  }, [])

  return (
    <LangContext.Provider value={{ lang, setLang, toggle }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}
