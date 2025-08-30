import React, { useEffect, useState } from 'react'
import { loadData, saveData } from './store'
import { formatCurrency } from './utils'
import Header from './components/Header'
import IncomeForm from './components/IncomeForm'
import PaymentList from './components/PaymentList'
import StrategySelector from './components/StrategySelector'
import Charts from './components/Charts'
import SettingsPanel from './components/SettingsPanel'

export default function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    loadData().then(setData)
  }, [])

  useEffect(() => {
    if (data) saveData(data)
  }, [data])

  if (!data) return <div className="p-4">Загрузка...</div>

  const update = diff => setData({ ...data, ...diff })

  return (
    <div className="min-h-screen p-4">
      <Header settings={data.settings} onUpdate={s => update({ settings: s })}/>
      <div className="space-y-4">
        <IncomeForm incomes={data.incomes} onChange={incomes => update({ incomes })}/>
        <PaymentList payments={data.payments} onChange={payments => update({ payments })}/>
        <StrategySelector
          strategies={data.strategies}
          onChange={strategies => update({ strategies })}
        />
        <Charts incomes={data.incomes} payments={data.payments} strategies={data.strategies} />
      </div>
      <SettingsPanel settings={data.settings} onUpdate={s => update({ settings: s })}/>
    </div>
  )
}
