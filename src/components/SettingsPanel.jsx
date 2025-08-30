import React from 'react'

export default function SettingsPanel({ settings, onUpdate }) {
  const toggleLang = () =>
    onUpdate({ ...settings, lang: settings.lang === 'ru' ? 'en' : 'ru' })

  return (
    <footer className="fixed bottom-4 right-4 space-x-2">
      <button onClick={toggleLang} className="px-3 py-1 border rounded">
        {settings.lang === 'ru' ? 'EN' : 'RU'}
      </button>
    </footer>
  )
}
