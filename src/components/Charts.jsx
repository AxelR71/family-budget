import React from 'react'
import { PieChart, Pie, Cell } from 'recharts'

const COLORS = ['#4f46e5','#f59e0b','#10b981']

export default function Charts({ incomes, payments, strategies }) {
  const totalIncome = incomes.reduce((s,v)=>s+v.amount,0)
  const paySum     = payments.reduce((s,v)=>s+v.amount,0)
  const data = [
    { name: 'Платежи', value: paySum },
    { name: 'Личные', value: totalIncome * (strategies[0]?.perc[1]||30)/100 },
    { name: 'Накопления', value: totalIncome * (strategies[0]?.perc[2]||20)/100 }
  ]
  return (
    <section className="card bg-gray-50 dark:bg-gray-800 p-4 rounded">
      <h2 className="font-semibold mb-2">График распределения</h2>
      <PieChart width={200} height={200}>
        <Pie data={data} dataKey="value" outerRadius={80}>
          {data.map((_, idx) => (
            <Cell key={idx} fill={COLORS[idx]} />
          ))}
        </Pie>
      </PieChart>
    </section>
  )
}
