import {useSearchParams} from 'react-router-dom'
import {useCallback, useState} from 'react'

export function useCurrencyList() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [baseCur, setBaseCur] = useState('')
  
  const handleSelect = useCallback((val) => {
    setBaseCur(val)
    searchParams.set('base', val)
    setSearchParams(searchParams)
  }, [setSearchParams, searchParams])
  
  return {baseCur, handleSelect}
}