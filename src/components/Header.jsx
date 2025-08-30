import React from 'react'

export default function Header({ settings, onUpdate }) {
  const toggleTheme = () => {
    const t = settings.theme === 'light' ? 'dark' : 'light'
    onUpdate({ ...settings, theme: t })
    document.documentElement.className = t
  }

  return (
    <header className="flex justify-between items-center mb-4">
      <h1 className="text-2xl font-bold">Семейный бюджет</h1>
      <div className="space-x-2">
        <button onClick={toggleTheme}>
          {settings.theme === 'light' ? '🌙 Тёмная' : '☀️ Светлая'}
        </button>
      </div>
    </header>
  )
}
