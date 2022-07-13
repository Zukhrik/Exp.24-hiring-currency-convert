import React from 'react'
import {Button, FormControl, InputLabel, MenuItem, Paper, Select, Stack, Typography} from '@mui/material'
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
  let baseCurrency = searchParams.get('base') ? searchParams.get('base')?.toUpperCase() : 'USD'
  let baseCurValue = !!data && !!data?.rates && !!baseCurrency && findCurVal(data?.rates, baseCurrency)
  
  return (
    <Stack spacing={5}>
      <Paper elevation={3} sx={{padding: 4, overflow: 'hidden'}}>
        <Stack spacing={3}>
          <Typography variant='h3' textAlign='center'>Select custom currency</Typography>
          <Stack direction='row' spacing={3} alignItems='center'>
            <FormControl sx={{width: 200}}>
              <InputLabel>Selected currency</InputLabel>
              <Select
                label='Selected currency'
                onChange={(e) => handleSelect(e.target.value)}
                value={
                  data && data?.rates && !!baseCurValue && !!baseCurrency ? baseCurrency : ''
                }
              >
                {
                  !!data && data?.rates && !!baseCurValue && (
                    baseCur.length > 2
                      ? (
                        findCurrencies(data?.rates, baseCurValue).map((item, idx) => (
                          <MenuItem value={item.split(' ')[1]} key={idx + 1}>{item.split(' ')[1]}</MenuItem>
                        ))
                      )
                      : (
                        currencies(data?.rates).map((item, idx) => (
                          <MenuItem value={item.split(' ')[1]} key={idx + 1}>{item.split(' ')[1]}</MenuItem>
                        ))
                      )
                  )
                }
              </Select>
            </FormControl>
            <Typography variant='h4'>
              {`Base currency: ${baseCurrency || 'USD'}`}
            </Typography>
          </Stack>
          <Stack spacing={1} sx={{height: 500, overflowY: 'auto', overflowX: 'hidden'}}>
            {
              !!data && data?.rates && (
                !!baseCurValue && !!baseCurrency
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