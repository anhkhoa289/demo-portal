import React, {useState} from 'react'


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