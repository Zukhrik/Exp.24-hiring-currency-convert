import {createEvent} from 'effector'
import {fetchCurrencyList} from './effects'

export const currencyListMount = createEvent()

currencyListMount.watch(fetchCurrencyList)
