import { get, set } from 'idb-keyval'

const KEY = 'family-budget-data'

export async function loadData() {
  return (await get(KEY)) || {
    incomes: [],
    payments: [],
    strategies: [],
    settings: { lang: 'ru', theme: 'light' }
  }
}

export async function saveData(data) {
  await set(KEY, data)
}
