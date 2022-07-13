import {combine, createStore} from 'effector'
import {fetchCurrencyList} from './effects'

const $currencyList = createStore({data: {}, error: false})
  .on(fetchCurrencyList.pending, (state) => ({...state}))
  .on(fetchCurrencyList.fail, (state, {error}) => ({...state, error, data: []}))
  .on(fetchCurrencyList.done, (state, res) => {
    return {...state, data: res.result.data, error: false}
  })


export const $currencyModel = combine({
  $currencyList
})