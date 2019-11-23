import React, {useEffect, useState} from 'react'
import {generateKey, sign} from '../logic/rsa'

import PrivatePublic from '../components/SectionCrypto/PrivatePublic'
import SignMessage from '../components/SectionCrypto/SignMessage'
import VerifyMessage from '../components/SectionCrypto/VerifyMessage'


const Rsa = () => {

  const [errors, setErrors] = useState({})
  const [privateKey, setPrivate] = useState('')
  const [publicKey, setPublic] = useState('')
  const [compressPublicKey, setCompressPublicKey] = useState('')
  const [signature, setSignature] = useState('')
  const [message, setMessage] = useState('')

  const onSign = () => {
    if (privateKey) {
      setErrors({...errors, privateKey: false})
      setSignature(sign(message, privateKey));
    } else {
      setErrors({...errors, privateKey: true})
    }
  }

  useEffect(() => {
    onSign()
  }, [privateKey, message])

  const onChangePrivate = (e) => setPrivate(e.currentTarget.value)
  const onChangeMessageNeedSigning = (e) => setMessage(e.currentTarget.value)

  const onGenerateKey = () => {
    const { privateKey, publicKey, compressPublicKey } = generateKey()
    setPrivate(privateKey)
    setPublic(publicKey)
    setCompressPublicKey(compressPublicKey)

  }

  const onGenerateKeyFromPrivateKey = () => {
    if (privateKey) {
      setErrors({...errors, privateKey: false})
      const { publicKey, compressPublicKey } = generateKey(privateKey)
      setPublic(publicKey)
      setCompressPublicKey(compressPublicKey)
    } else {
      setErrors({...errors, privateKey: true})
    }
  }
  
  return (
    <>
      <PrivatePublic
        {
          ...{
            errors,
            privateKey,
            onChangePrivate,
            publicKey,
            compressPublicKey,
            onGenerateKey,
            onGenerateKeyFromPrivateKey,
          }
        }
      />
      
      <SignMessage
        {
          ...{
            onChangeMessageNeedSigning,
            signature,
          }
        }
      />
      
      <VerifyMessage />
    </>
  )
}

export default Rsa
