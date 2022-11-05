import React,{useState} from 'react';
// import {useNavigate} from 'react-router-dom'
import { Box } from '@material-ui/core'
import { Card,Grid } from '@mui/material';
const AdminProfile = () => {
  const[userData,setUserData]=useState({});
  // let history=useNavigate();





    return (
        <Box py={5} textAlign="Left">
        <Card sx={{ maxWidth: 500,margin:'auto' }} >
          <form method="GET">
          <Grid container spacing={2} sx={{ maxWidth: '90%',margin:'auto' }}>
        <Grid item xs={4}>
        <img src= "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"  
        style={{width:'150px',height:'150px'}}
        /> 
        </Grid>
        <Grid item xs={4}>
         
        </Grid>
        <Grid item xs={4}>
        {/* <Button color="secondary" variant="contained">Edit Profile</Button> */}
        </Grid>
        <Grid item xs={6}>
          id
        </Grid>
        <Grid item xs={6}>
         {userData._id}
        </Grid>


        <Grid item xs={6}>
          Name
        </Grid>
        <Grid item xs={6}>
         {userData.fname}
        </Grid>

        <Grid item xs={6}>
          Email
        </Grid>
        <Grid item xs={6}>
       {userData.email}
        </Grid>




        <Grid item xs={6}>
          Phone No
        </Grid>
        <Grid item xs={6}>
          {userData.phone}
        </Grid>





        <Grid item xs={6}>
          Address
        </Grid>
        <Grid item xs={6}>
         {userData.password}
        </Grid>
     





        
        <Grid item xs={6}>
        User Role
        </Grid>
        <Grid item xs={6}>
         {userData.role}
        </Grid>
        
      </Grid>
      </form>
      <br/>
      </Card>






         </Box>
    )
}

export default AdminProfile
