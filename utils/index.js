export const formatCurrency = (value) => {
  try {
    if (typeof value === 'number') {
      value = value.toString()
    }
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  } catch (error) { }
  return 0
}

export const formatDate = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};