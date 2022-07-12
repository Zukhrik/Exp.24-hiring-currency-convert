import {combine, createStore} from 'effector'
import {fetchCurrencyList} from './effects'

const $currencyList = createStore({data: {}, error: false, loading: false})
  .on(fetchCurrencyList.pending, (state, loading) => ({...state, loading}))
  .on(fetchCurrencyList.fail, (state, {error}) => ({...state, error, data: []}))
  .on(fetchCurrencyList.done, (state, res) => {
    return {...state, data: res.result.data, error: false, loading: false}
  })


export const $currencyModel = combine({
  $currencyList
})