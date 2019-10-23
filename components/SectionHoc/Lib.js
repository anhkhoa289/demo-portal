import React from 'react'
import {
  Grid,
  Button,
  Link
} from '@material-ui/core'
import Code from '../Code'
import PageExample from '../MainLayout/PageExample'
import ExpandExample from '../MainLayout/ExpandExample'


const Lib = () => {
  return (
    <PageExample headerTitle='Lib'>

      <ExpandExample
        id="withRouter"
        headerSumary='react-router-dom - withRouter '
      >
        <Grid container>
          <Grid item md={6}>
            <Code source='/static/code/hoc/hoc-page-withrouter.js' language='jsx' />
          </Grid>
          <Grid item md={6}>
            <Code source='/static/code/hoc/hoc-withrouter.js' language='jsx' />
          </Grid>
          <Grid container>
            <Button variant="contained" color="secondary" component={Link} target='_blank' href='https://reacttraining.com/react-router/web/api/withRouter'>
              Offical Example
            </Button>
          </Grid>
        </Grid>
      </ExpandExample>


      <ExpandExample
        id="i18next"
        headerSumary='i18next - t'
      >

        <Grid container>
          <Button variant="contained" color="secondary" component={Link} target='_blank' href='https://react.i18next.com/latest/withtranslation-hoc'>
            Offical Example
          </Button>
        </Grid>
      </ExpandExample>


      <ExpandExample
        id="redux"
        headerSumary='redux - connect'
      >
        <Grid container>
          <Grid container>
            <Button variant="contained" color="secondary" component={Link} target='_blank' href='https://react-redux.js.org/introduction/quick-start'>
              Offical Example
            </Button>
          </Grid>

          <Grid item md={12}>
            <Code source='/static/code/hoc/hoc-connect.js' language='jsx' />
          </Grid>
          <Grid item md={12}>
            <Code source='/static/code/hoc/hoc-connect-function.js' language='jsx' />
          </Grid>
        </Grid>
      </ExpandExample>

    </PageExample>
  )
}

export default Lib
