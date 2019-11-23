import React from 'react'
import {
  Grid,
  TextField
} from '@material-ui/core';
import PageExample from '../MainLayout/PageExample'


const SignMessage = ({
  onChangeMessageNeedSigning,
  signature
}) => {
  return (
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
              onChange={onChangeMessageNeedSigning}
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
        </Grid>
      </PageExample>
  )
}

export default SignMessage
