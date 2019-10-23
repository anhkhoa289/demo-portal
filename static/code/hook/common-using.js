import React from 'react'
import DisabledButton from 'DisabledButton'


const board = () => {

  return (
    <>
      <DisabledButton type='buy-gas'></DisabledButton>
      <DisabledButton type='call-support'></DisabledButton>
      <DisabledButton type='payment'></DisabledButton>
      ...
    </>
  )
}

export default board
