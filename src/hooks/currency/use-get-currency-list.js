import {useEffect} from 'react'
import {currencyListMount} from '../../models/currencies'

export function useGetCurrencyList() {
  
  useEffect(() => {
    currencyListMount()
  }, [])
}