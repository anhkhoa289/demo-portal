import React from 'react'
import {
  Grid,
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import common from '../common'


const ExpandExample = ({ headerSumary, id, children }) => {
  const classes = common()
  return (
    <Grid item md={12} className={classes.group}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={id}
          id={id}
        >
          <Typography variant='h5'>{headerSumary}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          {children}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Grid>
  )
}

export default ExpandExample
