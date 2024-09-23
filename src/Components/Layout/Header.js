import React, { useState } from 'react'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import {AppBar, Box, IconButton, Toolbar, Typography,Divider} from "@mui/material"
import { Link } from 'react-router-dom';
import "../../Styles/HeaderStyles.css"
import MenuIcon from '@mui/icons-material/Menu';
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  //handle menu click
  const handleDrawerToggle = ()=>{
    setMobileOpen(!mobileOpen);
  }
  //menu drawer
  const drawer = (
    <Box>
      <Typography color={'goldenrod'} variant='h6' component={"div"} sx={{flexGrow:1,my:2}}>
      </Typography>
      <Divider>
        <ul>
          <li></li>
        </ul>
      </Divider>
    </Box>
  )
  return (
    <div>
       <Box>
          <AppBar component={"nav"} sx={{background:"black"}}>
            <Toolbar>
              <IconButton color='inherit' aria-label='open drawer' edge='start' sx={{mr:2,display:{sm:"none"}}}>
                <MenuIcon/>
              </IconButton>
               <Typography color={'goldenrod'} variant='h6' component={"div"} sx={{flexGrow:1}}>
               <FastfoodIcon/>
                My Restaurant
                </Typography>
                <Box sx={{display: {xs:'none' ,sm:"block"}}}>
                  <ul className='navigation-menu'>
                    <li><Link to={'/'}>Home</Link></li>
                    <li> <Link to={'/about'}>About</Link></li>
                    <li><Link to={'/contact'}>Contact</Link></li>
                    <li><Link to={'/menu'}>Menu</Link></li>
                  </ul>
                </Box>
            </Toolbar>
          </AppBar>
       </Box>
    </div>
  )
}

export default Header