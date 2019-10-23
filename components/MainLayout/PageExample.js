import React from 'react'
import {
  Grid,
  Typography,
  Container
} from '@material-ui/core'
import Link from 'next/link'
import common from '../common'
import slugify from 'slugify'


const PageExample = ({ headerTitle, children }) => {
  const classes = common()
  const identify = slugify(headerTitle)
  return (
    <Container>
      <Grid container className={classes.page}>
        <Grid item md={12}>
          <Typography id={identify} variant='h4' className={classes.pageHeading}>
            <Link href={`#${identify}`}><a className={classes.hashTag}># </a></Link>
            {headerTitle}
          </Typography>
        </Grid>
        <Grid container>
          {children}
        </Grid>
      </Grid>
    </Container>
  )
}

export default PageExample
