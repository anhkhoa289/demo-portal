import { useEffect, useState } from 'react'
import store from 'store'


const useDisabledButton = (type, initialDisableState = false) => {
  const [isDisable, setIsDisable] = useState(initialDisableState)

  useEffect(() => {
    setIsDisable(!store.getState().Button[type])
  
    const unsubscribe = store.subscribe(() => {
      setIsDisable(!store.getState().Button[type])
    })

    return unsubscribe
  }, [])

  return isDisable
}

export default useDisabledButton