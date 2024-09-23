import React from 'react'
import Layout from '../Components/Layout/Layout'
import { Box, TableContainer, Typography,Table,TableHead,TableCell,TableRow, Paper,TableBody } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
const Contact = () => {
  return (
    <Layout>
       <Box sx={{my:10,ml:10, "& h4":{fontWeight:"bold", mb:2}}}>
        <Typography variant='h4'>
          Contact  My Restaurant
        </Typography>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi tenetur, quos nisi non ut aliquam facilis dolore ad vero dolorum totam quas corrupti, blanditiis voluptates sit perspiciatis reiciendis. Praesentium, provident ducimus. Quia, quaerat dolorum labore animi deserunt perspiciatis beatae nostrum autem nihil saepe consequatur ducimus harum necessitatibus culpa eaque odio earum, corporis eum! Molestiae nemo ad sequi consectetur sapiente quaerat, vel autem, animi quam tempora assumenda libero consequuntur deleniti fuga deserunt laboriosam id accusantium veniam ratione facilis. Odit commodi vel consequuntur dolor ex placeat odio magnam dolorum vitae quia. Ad soluta cumque, deserunt quasi cupiditate aperiam natus minus nesciunt earum!
        </p>
        </Box>
        <Box sx={{m:3,width:"600px",ml:10,"@media (max-width:600px)":{
          width:"300px"
        }}}>
          <TableContainer component={Paper}>
            <Table aria-label="contact table">
              <TableHead >
                <TableRow >
                  <TableCell sx={{ backgroundColor:"black",color:"white",display:"flex",justifyContent:"Center",alignItems:"center"}}>Contact Details</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell >
                    <SupportAgentIcon sx={{color:"red",pt:1}}/>  1800-00-000(toolfree)
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell >
                    <MailIcon sx={{color:"grey",pt:1}}/>  foodworld.order@gmail.com
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell >
                    <PhoneIcon sx={{color:"black",pt:1}}/>  8907654123
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
    </Layout>
  )
}

export default Contact