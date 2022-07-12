import React from 'react'
import {Button, MenuItem, Paper, Select, Stack, Typography} from '@mui/material'
import {useStore} from 'effector-react'
import {$currencyModel} from '../../../models/currencies'
import {currencies, findCurrencies, findCurVal} from '../../../utils'
import {useNavigate} from 'react-router'
import {useCurrencyList, useReloadPage} from '../hooks'
import {useSearchParams} from 'react-router-dom'

export const RatingPage = () => {
  useReloadPage()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const {baseCur, handleSelect} = useCurrencyList()
  const {$currencyList: {data}} = useStore($currencyModel)
  let baseCurrency = searchParams.get('base')?.toUpperCase()
  let baseCurValue = !!data && !!data?.rates && findCurVal(data?.rates, baseCurrency)
  
  return (
    <Stack spacing={5}>
      <Paper elevation={3} sx={{padding: 4, overflow: 'hidden'}}>
        <Stack spacing={3}>
          <Typography variant='h3' textAlign='center'>
            {`Base currency: ${baseCurrency || 'USD'}`}
          </Typography>
          <Select
            onChange={(e) => handleSelect(e.target.value)}
            value={baseCurrency || ''}
          >
            {
              !!data && data?.rates && (
                baseCur.length > 2
                  ? (
                    findCurrencies(data?.rates, baseCurValue).map((item, idx) => (
                      <MenuItem value={item} key={idx + 1}>{item}</MenuItem>
                    ))
                  )
                  : (
                    currencies(data?.rates).map((item, idx) => (
                      <MenuItem value={item} key={idx + 1}>{item}</MenuItem>
                    ))
                  )
              )
            }
          </Select>
          <Stack spacing={1} sx={{maxHeight: 500, overflowY: 'auto', overflowX: 'hidden'}}>
            {
              !!data && data?.rates && (
                baseCur.length > 2
                  ? (
                    findCurrencies(data?.rates, baseCurValue).map((item, idx) => (
                      <Typography key={idx + 1}>
                        {`1 ${baseCurrency || 'USD'} = ${item}`}
                      </Typography>
                    ))
                  )
                  : (
                    currencies(data?.rates).map((item, idx) => (
                      <Typography key={idx + 1}>
                        {`1 ${baseCurrency || 'USD'} = ${item}`}
                      </Typography>
                    ))
                  )
              )
            }
          </Stack>
        </Stack>
      </Paper>
      <Button variant='text' onClick={() => navigate('/')}>back to home</Button>
    </Stack>
  )
}