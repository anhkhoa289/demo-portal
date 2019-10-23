import React from 'react'
import common from '../common'
import slugify from 'slugify'
import Link from 'next/link'
import { Typography } from '@material-ui/core'


const HashTag = ({children, variant}) => {
  const classes = common()
  const identify = slugify(children)

  return (
    <Typography id={identify} variant={variant} className={classes.pageHeading}>
      <Link href={`#${identify}`}><a className={classes.hashTag}># </a></Link>
      {children}
    </Typography>
  )
}

export default HashTag
