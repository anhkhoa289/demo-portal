import React from 'react'
import { Grid, Button, Link } from '@material-ui/core'
import PageExample from '../MainLayout/PageExample'
import ExpandExample from '../MainLayout/ExpandExample'
import Code from '../Code'


const Layout = () => {
  return (
    <PageExample headerTitle='Layout'>
      <ExpandExample
        id="layout-without-hoc"
        headerSumary='Without Hoc'
      >
        <Grid container>
          <Grid item md={4}>
            <Code source='/static/code/hoc/layout-homepage.js' language='jsx' />
            <Button variant="contained" color="secondary" component={Link} href='/no-hoc/home' target='_blank'>
              Home - no hoc
            </Button>
            </Grid>
          <Grid item md={4}>
            <Code source='/static/code/hoc/layout-detail.js' language='jsx' />
            <Button variant="contained" color="secondary" component={Link} href='/no-hoc/detail' target='_blank'>
              Detail - no hoc
            </Button>
          </Grid>
          <Grid item md={4}>
            <Code source='/static/code/hoc/layout-listview.js' language='jsx' />
            <Button variant="contained" color="secondary" component={Link} href='/no-hoc/list' target='_blank'>
              List - no hoc
            </Button>
          </Grid>
        </Grid>
      </ExpandExample>


      <ExpandExample
        id='layout-with-hoc'
        headerSumary='With Hoc'
      >
        <Grid container>
          <Grid item md={4}>
            <Code source='/static/code/hoc/hoc-layout-homepage.js' language='jsx' />
            <Button variant="contained" color="secondary" component={Link} href='/with-hoc/home' target='_blank'>
              Home - with hoc
            </Button>
          </Grid>
          <Grid item md={4}>
            <Code source='/static/code/hoc/hoc-layout-detail.js' language='jsx' />
            <Button variant="contained" color="secondary" component={Link} href='/with-hoc/detail' target='_blank'>
              Detail - with hoc
            </Button>
          </Grid>
          <Grid item md={4}>
            <Code source='/static/code/hoc/hoc-layout-listview.js' language='jsx' />
            <Button variant="contained" color="secondary" component={Link} href='/with-hoc/list' target='_blank'>
              List - with hoc
            </Button>
          </Grid>
          <Grid container>
            <Grid item md={4}>
              <Code source='/static/code/hoc/hoc-layout-wrapper.js' language='jsx' />
            </Grid>
          </Grid>
        </Grid>
      </ExpandExample>

    </PageExample>
  )
}

export default Layout
