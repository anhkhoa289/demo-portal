import React from 'react'
import useDisabledButton from 'useDisabledButton'


const board = () => {
  const buyGas = useDisabledButton('buy-gas')
  const callSupport = useDisabledButton('call-support', true)
  const payment = useDisabledButton('payment')
  return (
    <>
      <button disabled={buyGas}></button>
      <a disabled={callSupport}></a>
      <Button disabled={payment}></Button>
      ...
    </>
  )
}

export default board