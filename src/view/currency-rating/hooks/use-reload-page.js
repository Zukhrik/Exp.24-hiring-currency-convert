import {useEffect} from 'react'

export function useReloadPage() {
  
  useEffect(() => {
    setInterval(function() {
      console.log('reload')
      window.location.reload(true)
    }, 15000)
  }, [])
}