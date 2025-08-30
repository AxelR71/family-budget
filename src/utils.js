export function formatCurrency(val, locale='ru-RU') {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: locale==='en-US'?'USD':'RUB'
  }).format(val)
}
