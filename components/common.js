import { makeStyles } from '@material-ui/core'
import tw from 'tailwind.macro'

const useStyles = makeStyles({
  page: tw`my-8`,
  pageHeading: tw`mb-4`,
  group: tw`mb-8`,
  hashTag: {
    color: '#e91e63'
  },

  // button
  buttonInGroup: tw`mr-2`,

  // icon
  lagreIcon: {
    fontSize: '6rem'
  },
})

export default useStyles
