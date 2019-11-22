import React, {useState} from 'react'
import {
  Button,
  Grid,
  TextField,
  Typography
} from '@material-ui/core';
import {
  Error as ErrorIcon,
  CheckCircle as CheckCircleIcon
} from '@material-ui/icons';
import PageExample from '../MainLayout/PageExample'
import elliptic from 'elliptic'
import sha3 from 'crypto-js/sha3'


const VerifyMessage = ({ classes }) => {
  const ec = new elliptic.ec('secp256k1')

  const [errors, setErrors] = useState({})
  const [result, setResult] = useState('')
  const [message, setMessage] = useState('')
  const [signature, setSignature] = useState('')
  const [key, setKey] = useState('')

  const onChangeMessage = (e) => setMessage(e.currentTarget.value)
  const onChangeSignature = (e) => setSignature(e.currentTarget.value)
  const onChangeKey = (e) => setKey(e.currentTarget.value)

  const validate = () => {
    let errors = {}
    if (signature.length) {
      errors = {...errors, signature: false}
    } else {
      errors = {...errors, signature: true}
    }
    if (key.length) {
      errors = {...errors, key: false}
    } else {
      errors = {...errors, key: true}
    }
    setErrors(errors)
    return errors
  }
  const verify = (e, type = 0) => {
    e.preventDefault()
    if (!Object.values(validate()).find((error) => error)) {
      const msgHash = sha3(message).toString()
      try {
        const keyPair = type ? ec.keyFromPrivate(key) : ec.keyFromPublic(key, 'hex')
        setResult(keyPair.verify(msgHash, signature) ? 'success': 'fail')
      } catch (error) {
        setResult(`Wrong signature or key or something, I don't know`)
      }
    }
  }

  return (
    <form>
      <PageExample headerTitle='Verify message'>
        <Grid item sm={6}>
          <Grid container spacing={2}>
            <Grid item sm={12}>
              <TextField
                error={errors.message}
                id='message-need-to-verify'
                label='Message need to verify'
                fullWidth
                multiline
                margin='normal'
                onChange={onChangeMessage}
              />
            </Grid>
            <Grid item sm={12}>
              <TextField
                error={errors.signature}
                id='signature-of-message'
                label='Signature of message'
                fullWidth
                multiline
                margin='normal'
                onChange={onChangeSignature}
              />
            </Grid>
            <Grid item sm={12}>
              <TextField
                error={errors.key}
                id="key"
                label="Key"
                fullWidth
                margin="normal"
                onChange={onChangeKey}
              />
            </Grid>
            <Grid item sm={12}>
              <Button variant='contained' color='secondary' className={classes.button} onClick={(e) => verify(e, 0)} type='submit'>
                Verify by public key
                </Button>
              <Button variant='contained' color='secondary' className={classes.button} onClick={(e) => verify(e, 1)} type='submit'>
                Verify by private key
                </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm={6}>
          <Grid
            container
            justify='space-around'
            alignContent='center'
            alignItems='center'
            className='h-full'
            direction='column'
          >
            <Typography variant='body1'>
              {result === 'success' ? <CheckCircleIcon className={classes.icon} /> : <ErrorIcon className={classes.icon} />}
            </Typography>
            <Typography variant='body1'>
              Result: {result}
            </Typography>
          </Grid>
        </Grid>
      </PageExample>
    </form>
  )
}

export default VerifyMessage
