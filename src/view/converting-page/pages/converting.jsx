import React from 'react'
import {Button, Paper, Stack, TextField, Typography} from '@mui/material'
import {useCurrencyFormHooks} from '../hooks'
import {ArrowLeftRightSvg} from '../../../components/icons/Arrow'
import {useNavigate} from 'react-router'

export const Converting = () => {
  const navigate = useNavigate()
  const {handleSubmit, handleChange, solution, val} = useCurrencyFormHooks()
  
  return (
    <Stack spacing={5}>
      <Paper sx={{padding: 2}} elevation={3}>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <Typography variant='h3' textAlign='center'>Currency convert</Typography>
            <Stack direction='row' spacing={2} justifyContent='space-between'>
              <TextField
                variant='outlined'
                label='Enter any currency to convert'
                value={val}
                fullWidth
                placeholder='number currency in currency'
                onChange={(e) => handleChange(e.target.value)}
              />
              <Button variant='outlined' type='submit'>
                <ArrowLeftRightSvg/>
              </Button>
              <TextField
                value={solution ? solution : ''}
                fullWidth
              />
            </Stack>
            <Typography lineHeight='24px'>{`Solution: ${solution ? solution : ''}`}</Typography>
          </Stack>
        </form>
      </Paper>
      <Button variant='text' onClick={() => navigate('/rating')}>rating page</Button>
    </Stack>
  )
}