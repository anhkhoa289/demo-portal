import React from 'react'
import hocWrapper from '../../components/layout/hoc'


const Home = () => {

  return (
    <>
      ...
      This is Home (with hoc)
      ...
    </>
  )
}

export default hocWrapper(Home, 'home')
