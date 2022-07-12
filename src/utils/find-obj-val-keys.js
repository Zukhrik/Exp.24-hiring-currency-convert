export const findCurVal = (obj, value) => {
  if (obj && value) {
    return Object.entries(obj).find(([idx, item]) => idx === value && item)?.[1]
  }
}

export const findCurrencies = (obj, value) => {
  if (obj && value) {
    return Object.entries(obj).map(([idx, key]) => `${(value / key).toLocaleString()} ${idx}`)
  }
}

export const currencies = (obj) => {
  if (obj) {
    return Object.entries(obj).map(([idx, key]) => `${key.toLocaleString()} ${idx}`)
  }
}