import React from 'react'
import hocWrapper from '../../components/FakeLayout/hoc'


const Detail = () => {

  return (
    <>
      ...
      This is Detail (with hoc)
      ...
    </>
  )
}

export default hocWrapper(Detail, 'detail')
