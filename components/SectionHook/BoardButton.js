import React, { useEffect, useState } from 'react'
import { Grid, Button, ButtonGroup, Divider, Typography, makeStyles, colors } from '@material-ui/core'
import store from '../../store'


const colorButton = makeStyles({
  green: {
    background: colors.green[500],
    color: '#FFFFFF'
  },
  red: {
    background: colors.red['A700'],
    color: '#FFFFFF'
  },
  blue: {
    background: colors.blue[500],
    color: '#FFFFFF'
  },
  yellow: {
    background: colors.yellow[500],
    color: '#000000'
  },
  orange: {
    background: colors.orange[900],
    color: '#FFFFFF'
  },
  purple: {
    background: colors.purple[500],
    color: '#FFFFFF'
  },
  pink: {
    background: colors.pink[500],
    color: '#FFFFFF'
  },
})

const TrinhConsole = () => {
  const adminButtons = {
    'set-admin': true,
    'payment': false,
    'submit': true,
    'out-of-gas': false,
    'random': true,
    'alert': false,
    'buy-gas': false,
    'call-support': true,
    'cà-khịa': false,
    'show-balance': false,
  }
  const userButtons = {
    'set-admin': false,
    'payment': true,
    'submit': true,
    'out-of-gas': true,
    'random': true,
    'alert': true,
    'buy-gas': true,
    'call-support': true,
    'cà-khịa': false,
    'show-balance': true,
  }
  const childrenButtons = { 'cà-khịa': true }
  const admin = () => store.dispatch({ type: 'UPDATE_ROLE', buttons: adminButtons })
  const user = () => store.dispatch({ type: 'UPDATE_ROLE', buttons: userButtons })
  const children = () => store.dispatch({ type: 'UPDATE_ROLE', buttons: childrenButtons })
  return (
    <Grid container>
      Trình's console:
      <Grid container wrap='wrap'>
        <ButtonGroup
              color="secondary"
              size="large"
              aria-label="large outlined secondary button group"
            >
          <Button onClick={admin}>Admin</Button>
          <Button onClick={user}>User</Button>
          <Button onClick={children}>Children</Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  )
}

const useDisabledButton = (type, initialDisableState = false) => {
  const [isDisable, setIsDisable] = useState(initialDisableState)

  useEffect(() => {
    setIsDisable(!store.getState().Button[type])
  
    const unsubscribe = store.subscribe(() => {
      setIsDisable(!store.getState().Button[type])
    })

    return unsubscribe
  }, [])

  return isDisable
}


const BoardButton = ({className}) => {
  const classes = colorButton()

  const setAdmin = useDisabledButton('set-admin')
  const payment = useDisabledButton('payment')
  const submit = useDisabledButton('submit')
  const outOfGas = useDisabledButton('out-of-gas')
  const random = useDisabledButton('random')
  const alert = useDisabledButton('alert')
  const buyGas = useDisabledButton('buy-gas')
  const callSupport = useDisabledButton('call-support')
  const caKhia = useDisabledButton('cà-khịa')
  const showBalance = useDisabledButton('show-balance')

  return (
    <Grid container className={className}>
      <Grid container justify='space-between' alignItems='center' className='m-4'>
        <Button variant="contained" className={classes.green} disabled={setAdmin}>Set admin</Button>
        <Button variant="contained" className={classes.red} disabled={payment}>Payment</Button>
        <Button variant="contained" className={classes.blue} disabled={submit}>Submit</Button>
        <Button variant="contained" className={classes.yellow} disabled={outOfGas}>Out of gas</Button>
        <Button variant="contained" className={classes.orange} disabled={random}>Random</Button>
      </Grid>
      <Grid container justify='space-between' alignItems='center' className='m-4'>
        <Button variant="contained" className={classes.pink} disabled={alert}>Alert</Button>
        <Button variant="contained" className={classes.purple} disabled={buyGas}>Buy gas</Button>
        <Button variant="contained" className={classes.pink} disabled={callSupport}>Call support</Button>
        <Button variant="contained" className={classes.red} disabled={caKhia}>Cà Khịa</Button>
        <Button variant="contained" className={classes.purple} disabled={showBalance}>Show balance</Button>
      </Grid>
      <TrinhConsole />
    </Grid>
  )
}

export default BoardButton
