import React, {useState} from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core'
import { Menu as MenuIcon } from '@material-ui/icons'
import { useRouter } from 'next/router'
import Link from 'next/link'


const mainPath = [
  '/',
  '/hoc'
]

const pageMap = [
  { path: '/', name: 'Home' },
  { path: '/hoc', name: 'Hoc' },
  { path: '/hook', name: 'Hook' },
  { path: '/rsa', name: 'Rsa' },
]

const Header = () => {
  const [sideBar, setsideBar] = useState(false)
  const openSideBar = () => setsideBar(true)
  const closeSideBar = () => setsideBar(false)

  const router = useRouter()

  const currentPage = pageMap.find(page => page.path === router.pathname)
  if (currentPage) {
    return (
      <>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={openSideBar}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">
              {currentPage.name}
            </Typography>
          </Toolbar>
        </AppBar>

        <Drawer open={sideBar} onClose={closeSideBar}>
          <List className='w-64'>
            {pageMap.map(page =>
              <Link href={page.path} key={page.name}>
                <ListItem button onClick={closeSideBar}>
                  <ListItemText primary={page.name} />
                </ListItem>
              </Link>
            )}
          </List>
        </Drawer>
      </>
    )
  }

  return <></>

}

export default Header
