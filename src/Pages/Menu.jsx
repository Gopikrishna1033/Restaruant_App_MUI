import React from 'react'
import Layout from '../Components/Layout/Layout'
import { Box, CardActionArea ,Card, CardMedia, CardContent, Typography} from '@mui/material'
import { MenuList} from "../data/data"
const Menu = () => {
  return (
    <Layout>
        <Box sx={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
          {
            MenuList.map((menu)=>{
              return <Card sx={{maxWidth:"390px",display:'flex',m:2}}>
                <CardActionArea>
                  <CardMedia sx={{minHeight:'400px'}} component={'img'} src={menu.image} alt={menu.name}/>
                  <CardContent>
                    <Typography variant='h5' gutterBottom component={'div'}>
                      {menu.name}
                    </Typography>
                    <Typography>{menu.description}</Typography>
                    <Typography sx={{mt:2}}> <b>Price:</b>{menu.price}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            })
          }
        </Box>
    </Layout>
  )
}

export default Menu