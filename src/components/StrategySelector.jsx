import React from 'react'

const presets = [
  { id: 1, name: '50/30/20', perc: [50,30,20] },
  { id: 2, name: 'Агрессивное погашение', perc: [60,10,30] },
  { id: 3, name: 'Накопительная', perc: [40,20,40] },
  { id: 4, name: 'Минимальный стресс', perc: [30,50,20] }
]

export default function StrategySelector({ strategies, onChange }) {
  const select = p => onChange([p])
  return (
    <section className="card bg-gray-50 dark:bg-gray-800 p-4 rounded">
      <h2 className="font-semibold mb-2">Стратегии бюджета</h2>
      <div className="flex flex-wrap gap-2">
        {presets.map(p => (
          <button
            key={p.id}
            onClick={() => select(p)}
            className="px-3 py-1 border rounded hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {p.name}
          </button>
        ))}
      </div>
    </section>
  )
}
