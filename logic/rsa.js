import elliptic from 'elliptic'
import sha3 from 'crypto-js/sha3'
import jssha3 from 'js-sha3'

const ec = new elliptic.ec('secp256k1')

export const generateKey = (privateKey = '') => {
  const keyPair = privateKey ? ec.keyFromPrivate(privateKey) : ec.genKeyPair()
  return {
    privateKey: keyPair.getPrivate('hex'),
    publicKey: keyPair.getPublic('hex'),
    compressPublicKey: keyPair.getPublic().encodeCompressed('hex')
  }
}

export const sign = (message, privateKey) => {
  if (privateKey) {
    const msgHash = sha3(message).toString()
    // console.log(sha3(message).toString())
    // console.log(jssha3.sha3_256(message))
    // console.log(jssha3.keccak256(message))

    return ec.sign(msgHash, privateKey, 'hex', {canonical: true}).toDER('hex');
  } else {
    throw new Error('invalid private key')
  }
}

export const verify = (message, signature, key, isPrivateKey = false) => {
  const msgHash = sha3(message).toString()
  const keyPair = isPrivateKey ? ec.keyFromPrivate(key) : ec.keyFromPublic(key, 'hex')
  return keyPair.verify(msgHash, signature)
}



/****************************************************************
 * RSA on nodejs
 * **************************************************************
 */

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