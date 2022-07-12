import {createEffect} from 'effector'
import currency from '../../service/currency'

export const fetchCurrencyList = createEffect({
  handler: currency.getAllCurrencies
})

export const fetchCurrencies = createEffect({
  handler: currency.postAllCurrencies
})