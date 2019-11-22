import React, {useState} from 'react'
import {
  Button,
  Grid,
  TextField,
  makeStyles
} from '@material-ui/core';
import PageExample from '../components/MainLayout/PageExample'
import PrivatePublic from '../components/SectionCrypto/PrivatePublic'
import VerifyMessage from '../components/SectionCrypto/VerifyMessage'
import tw from 'tailwind.macro'

import elliptic from 'elliptic'
import sha3 from 'crypto-js/sha3'
import jssha3 from 'js-sha3'

// import { generateKeyPairSync } from 'crypto'
// const { publicKey, privateKey } = generateKeyPairSync('rsa', {
//   modulusLength: 4096,
//   namedCurve: 'secp256k1',
//   publicKeyEncoding: {
//     type: 'spki',
//     format: 'pem'
//   },
//   privateKeyEncoding: {
//     type: 'pkcs8',
//     format: 'pem',
//     cipher: 'aes-256-cbc',
//     passphrase: 'top secret'
//   }
// });
// console.log(publicKey, privateKey)

const useStyles = makeStyles(theme => ({
  button: tw`mr-2`,
  icon: {
    fontSize: '6rem'
  },
}))

const Rsa = () => {
  const classes = useStyles();

  const [errors, setErrors] = useState({})
  const [privateKey, setPrivate] = useState('')
  const [publicKey, setPublic] = useState('')
  const [compressPublicKey, setCompressPublicKey] = useState('')
  const [signature, setSignature] = useState('')

  const onChangePrivate = (e) => setPrivate(e.currentTarget.value)
  const ec = new elliptic.ec('secp256k1')


  const generateKey = () => {
    const keyPair = ec.genKeyPair()
    setPrivate(keyPair.getPrivate('hex'))
    setPublic(keyPair.getPublic('hex'))
    setCompressPublicKey(keyPair.getPublic().encodeCompressed('hex'))
  }

  const generateKeyFromPrivateKey = () => {
    if (privateKey) {
      setErrors({...errors, privateKey: false})
      const keyPair = ec.keyFromPrivate(privateKey)
      setPublic(keyPair.getPublic('hex'))
      setCompressPublicKey(keyPair.getPublic().encodeCompressed('hex'))
    } else {
      setErrors({...errors, privateKey: true})
    }
  }

  const sign = (e) => {
    e.preventDefault()

    if (privateKey) {
      setErrors({...errors, privateKey: false})
      const message = e.target.message.value
      const msgHash = sha3(message).toString()
      // console.log(sha3(message).toString())
      // console.log(jssha3.sha3_256(message))
      // console.log(jssha3.keccak256(message))
  
      const signature = ec.sign(msgHash, privateKey, 'hex', {canonical: true}).toDER('hex');
  
      setSignature(signature);
    } else {
      setErrors({...errors, privateKey: true})
    }

  }
  
  return (
    <>
      <PrivatePublic
        {
          ...{
            classes,
            errors,
            privateKey,
            onChangePrivate,
            publicKey,
            compressPublicKey,
            generateKey,
            generateKeyFromPrivateKey
          }
        }
      />
      
      <form onSubmit={sign}>
        <PageExample headerTitle='Sign message'>
          <Grid container spacing={2}>
            <Grid item sm={12}>
              <TextField
                id='message'
                name='message'
                label='Message'
                fullWidth
                multiline
                margin='normal'
              />
            </Grid>
            <Grid item sm={12}>
              <TextField
                id='signature'
                label='Signature'
                fullWidth
                multiline
                margin='normal'
                value={signature}
              />
            </Grid>
            <Grid item sm={12}>
              <Button variant='contained' color='secondary' className={classes.button} type='submit'>
                Sign
              </Button>
            </Grid>
          </Grid>
        </PageExample>
      </form>
      
      <VerifyMessage classes={classes} />
    </>
  )
}

export default Rsa
