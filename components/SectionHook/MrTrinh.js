import React, {useState} from 'react'
import { Grid } from '@material-ui/core'
import PageExample from '../MainLayout/PageExample'
import Code from '../Code'
import HashTag from '../MainLayout/HashTag'
import BoardButton from './BoardButton'




const MrTrinh = () => {

  return (
    <PageExample headerTitle={`Mr Trinh board button`}>
      <Grid container>
        <BoardButton className='mb-4'/>
        

        <Grid item md={12}>
          <HashTag variant='h6'>Common solution</HashTag>
          <Code source='/static/code/hook/common-solution.js' language='jsx' />
          <Code source='/static/code/hook/common-using.js' language='jsx' />
        </Grid>
        <Grid item md={12}>
          <HashTag variant='h6'>Hook solution</HashTag>
          <Code source='/static/code/hook/hook-solution.js' language='jsx' />
          <Code source='/static/code/hook/hook-using.js' language='jsx' />
        </Grid>
      </Grid>
    </PageExample>
  )
}

export default MrTrinh
