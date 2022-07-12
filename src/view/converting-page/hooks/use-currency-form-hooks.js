import {useStore} from 'effector-react'
import {$currencyModel} from '../../../models/currencies'
import {findCurVal} from '../../../utils'
import {useCallback, useState} from 'react'

export function useCurrencyFormHooks() {
  const {$currencyList: {data}} = useStore($currencyModel)
  const [val, setVal] = useState('')
  const [solution, setSolution] = useState(undefined)
  
  const handleSubmit = useCallback((e) => {
    e.preventDefault()
    let count
    let currency1
    let currency2
    if (val.length > 5 && data?.rates) {
      count = val.split(' ')[0].toUpperCase()
      currency1 = val.split(' ')[1].toUpperCase()
      currency2 = val.split(' ')[3].toUpperCase()
      let cost1 = findCurVal(data?.rates, currency1)
      let cost2 = findCurVal(data?.rates, currency2)
      setSolution(`${(cost2 / cost1 * count).toLocaleString()} ${currency2}`)
    }
  }, [val, data?.rates])
  
  const handleChange = useCallback((e) => {
    setVal(e)
    if (solution && solution.length >= solution.length - 1) {
      setSolution(undefined)
    }
  }, [solution])
  
  return {handleChange, handleSubmit, solution, val}
}