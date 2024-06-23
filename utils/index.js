export const formatCurrency = (value) => {
  try {
    if (typeof value === 'number') {
      value = value.toString()
    }
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  } catch (error) { }
  return 0
}