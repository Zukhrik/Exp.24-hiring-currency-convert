import React from 'react'
import {Routes} from 'react-router'
import {Route} from 'react-router-dom'
import {Converting} from './view/converting-page'
import {Container} from '@mui/material'
import {RatingPage} from './view/currency-rating'
import {NotFoundPage} from './view/not-found-page'
import {useGetCurrencyList} from './hooks/currency'

function App() {
  useGetCurrencyList()
  
  return (
    <Container sx={{padding: '32px 0'}}>
      <Routes>
        <Route path='/' element={<Converting/>}/>
        <Route path='/rating' element={<RatingPage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </Container>
  )
}

export default App
