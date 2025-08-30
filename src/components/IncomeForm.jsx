import React, { useState } from 'react'
import { formatCurrency } from '../utils'

export default function IncomeForm({ incomes, onChange }) {
  const [val, setVal] = useState('')
  const add = () => {
    if (!val) return
    onChange([...incomes, { id: Date.now(), amount: +val }])
    setVal('')
  }
  return (
    <section className="card bg-gray-50 dark:bg-gray-800 p-4 rounded">
      <h2 className="font-semibold mb-2">Доходы</h2>
      <div className="flex gap-2">
        <input
          type="number"
          className="flex-1 p-2 rounded border"
          placeholder="₽ / $"
          value={val}
          onChange={e => setVal(e.target.value)}
        />
        <button onClick={add} className="px-4 py-2 bg-blue-600 text-white rounded">
          Добавить
        </button>
      </div>
      <ul className="mt-2 list-disc list-inside">
        {incomes.map(i => (
          <li key={i.id}>{formatCurrency(i.amount)}</li>
        ))}
      </ul>
    </section>
  )
}
