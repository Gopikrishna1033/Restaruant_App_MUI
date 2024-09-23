import React, { useState } from 'react'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import {AppBar, Box, IconButton, Toolbar, Typography,Divider, Drawer} from "@mui/material"
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
    <Box onClick={handleDrawerToggle} sx={{textAlign:"Center"}} width={240}>
      <Typography color={'goldenrod'} variant='h6' component={"div"} >
      <FastfoodIcon/>
        My Restaurant
      </Typography>
      <Divider></Divider>
        <ul className='mobile-navigation'>
          
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/about"}>About</Link></li>
          <li><Link to={"/contact"}>Contact</Link></li>
          <li><Link to={"/menu"}>Menu</Link></li>
        </ul>

    </Box>
  )
  return (
    <div>
       <Box>
          <AppBar component={"nav"} sx={{background:"black"}}>
            <Toolbar>
              <IconButton color='inherit' aria-label='open drawer' edge='start' sx={{mr:2,display:{sm:"none"}}} onClick={handleDrawerToggle}>
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
          <Box component={"nav"}>
            <Drawer variant='temporary' open={mobileOpen} onClose={handleDrawerToggle}sx={{display:{xs:'block', sm:'none'},"&.MuiDrawer-paper":{boxSizing:"border-box",
              
            },}} >
              {drawer}
            </Drawer>
          </Box>
          <Box >
          <Toolbar/>
          </Box>
          
       </Box>
    </div>
  )
}

export default Header