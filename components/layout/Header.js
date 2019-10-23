import React from 'react'
import Head from 'next/head'
import { makeStyles, Typography } from '@material-ui/core'

const makeHeaderClass = makeStyles({

})

const Header = ({title}) => {

  return (
    <>
      <Head>
        <title>Layout - {title}</title>
      </Head>
      <header>
        <Typography variant='h3'>
          Example Layout - {title}
        </Typography>
      </header>
    </>
  )
}

export default Header
