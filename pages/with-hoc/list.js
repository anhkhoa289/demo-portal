import React from 'react'
import hocWrapper from '../../components/FakeLayout/hoc'


const ListView = () => {

  return (
    <>
      ...
      This is List (with hoc)
      ...
    </>
  )
}

export default hocWrapper(ListView, 'list')
