import React, { useState } from 'react'
import { formatCurrency } from '../utils'

export default function PaymentList({ payments, onChange }) {
  const [name, setName] = useState('')
  const [amt, setAmt] = useState('')
  const add = () => {
    if (!name || !amt) return
    onChange([...payments, { id: Date.now(), name, amount: +amt }])
    setName(''); setAmt('')
  }
  return (
    <section className="card bg-gray-50 dark:bg-gray-800 p-4 rounded">
      <h2 className="font-semibold mb-2">Обязательные платежи</h2>
      <div className="flex gap-2 mb-2">
        <input
          type="text"
          className="flex-1 p-2 rounded border"
          placeholder="Название"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type="number"
          className="w-24 p-2 rounded border"
          placeholder="₽ / $"
          value={amt}
          onChange={e => setAmt(e.target.value)}
        />
        <button onClick={add} className="px-3 bg-green-600 text-white rounded">OK</button>
      </div>
      <ul className="mt-2 list-disc list-inside">
        {payments.map(p => (
          <li key={p.id}>
            {p.name}: {formatCurrency(p.amount)}
          </li>
        ))}
      </ul>
    </section>
  )
}
