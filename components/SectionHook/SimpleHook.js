import React, {useState} from 'react'
import { Grid, Button, Typography } from '@material-ui/core'
import PageExample from '../MainLayout/PageExample'
import Code from '../Code'


const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <Grid
      container
      justify='space-around'
      alignContent='center'
      alignItems='center'
      className='h-full'
    >
      <Button
        variant="contained"
        color='secondary'
        onClick={() => setCount(count + 1)}
      >
        Increase
      </Button>

      <Typography variant='body1'>
        {count} Clicked
      </Typography>
    </Grid>
  )
}

const SimpleHook = () => {

  return (
    <PageExample headerTitle='Basic hook from facebook'>
      <Grid container>
        <Grid item md={6}>
          <Code source='/static/code/hook/counter.js' language='jsx' />
        </Grid>
        <Grid item md={6}>
          <Counter />
        </Grid>
      </Grid>
    </PageExample>
  )
}

export default SimpleHook
