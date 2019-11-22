import React from 'react'
import {
  Button,
  Grid,
  TextField
} from '@material-ui/core';
import PageExample from '../MainLayout/PageExample'


const PrivatePublic = ({
  classes,
  errors,
  privateKey,
  onChangePrivate,
  publicKey,
  compressPublicKey,
  generateKey,
  generateKeyFromPrivateKey
}) => {

  return (
    <PageExample headerTitle='Private public key pair'>
      <Grid container spacing={2}>
        <Grid item sm={6}>
          <TextField
            error={errors.privateKey}
            id="private-key"
            label="Private key"
            fullWidth
            value={privateKey}
            margin="normal"
            onChange={onChangePrivate}
            required
          />
        </Grid>
        <Grid item sm={6}>
          <TextField
            id="compress-public-key"
            label="Public key (compress)"
            fullWidth
            value={compressPublicKey}
            margin="normal"
          />
        </Grid>
        <Grid item sm={12}>
          <TextField
            id="public-key"
            label="Public key"
            fullWidth
            value={publicKey}
            margin="normal"
          />
        </Grid>
        <Grid item sm={12}>
          <Button variant="contained" color="secondary" className={classes.button} onClick={generateKey}>
            Generate key
            </Button>
          <Button variant="contained" color="secondary" className={classes.button} onClick={generateKeyFromPrivateKey}>
            Generate from current private key
            </Button>
        </Grid>
      </Grid>
    </PageExample>
  )
}

export default PrivatePublic
