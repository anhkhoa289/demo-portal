import React from 'react'
import hocWrapper from '../../components/FakeLayout/hoc'


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
