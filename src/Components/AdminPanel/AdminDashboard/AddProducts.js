import React, { useState } from "react";
import { Grid, Paper,Box,TextField,InputLabel,Select,option,FormControl,makeStyles, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {Link, useNavigate} from 'react-router-dom';
import Barcode from 'react-barcode';
import QRCode from 'react-qr-code';
import axios from  'axios';
import StripeCheckout from 'react-stripe-checkout';
// import isEmpty from 'validator/lib/isEmpty';
// import equals from 'validator/lib/equals';
// import { showErrorMsg,showSuccessMsg } from "./helpers/message";
import { RiSendPlane2Fill } from "react-icons/ri";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
 
    padding: theme.spacing(1),
    height:"600px",
    paddingLeft:'20px',
    backgroundColor:'#151D3B',
    color:'White',
    fontWeight:'bold',
    paddingTop: '30px'

  },
  button:{
    backgroundColor:'#03045E ',
    color:'white'
  
  },
  
  paper2: {
    color:'White',
    fontWeight:'bold',
    textAlign: 'center',
    padding:'20px',
    height:"500px",
    backgroundColor:'white',
    color: theme.palette.text.secondary,
  },
}));
const AddProducts = () => {

const history=useNavigate();
const classes = useStyles();
  const [formData, setData] = useState({
    name: "",
    code:"",
    quantity: "",
    price: "",
    description:"",
    category: "",
    barcodeType:"",
    cableType:"",
    modem:"",
    router:"",
    successMsg: false,
    errorMsg: false
  });
//Now destrucuture the values
const {
  name,
    code,
    quantity,
    description,
    price,
    category,
    barcodeType,
    cableType,
    modem,
    router,
    successMsg,
    errorMsg,
} = formData;


  const ChangeEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
        successMsg:'',
        errorMsg:'',
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {name,code, quantity,description,price,category,barcodeType,cableType,  modem,router};
    fetch("http://localhost:8000/posts",{
      method:'POST',
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(data)
    }).then((res)=>{
      // alert('submited')
      console.log(res);
    }).catch((err)=>{
console.log(err);
    })







    
  };
  


  const handleToken= (token)=>{
    // const {classUp} = formData;
    console.log(token);
     

}


  
 
  return (
    <>
         <br/>
          <Grid container spacing={0} justifyContent="center" >
           <Grid item xs={12} lg={3} md={4} style={{boxShadow:'5px 5px 5px grey'}}>
          <Paper className={classes.paper}><h4 style={{paddingTop:'5px'}}>Add new Product</h4><br/>
          <iframe src="https://embed.lottiefiles.com/animation/94255"></iframe>
         <br/><br/><br/><br/>
         <Typography>Already</Typography>
         <Typography><Link to="/login" style={{textDecoration:'none'}}></Link></Typography>

          </Paper>
           
           </Grid>


        <Grid item xs={12} lg={6} md={8} style={{boxShadow:'5px 5px 5px grey'}}>
          <Paper  className={classes.paper2}>
          
          <br/>
          <form method="POST" autoComplete="off">
          <Grid container spacing={3}>
          {/* <Grid item xs={12} lg={12} md={12}>
          <p style={{color:"red" , fontSize: "20px"}}>
                    {successMsg && showSuccessMsg(successMsg)}
                    {errorMsg && showErrorMsg(errorMsg)}
                    </p>
          </Grid> */}
            <StripeCheckout
       stripeKey='pk_test_51KmLATH97oZvxj2YoOcepmb9ABzGw5L1mBl2eI478b6uImJ4orXKM6AQfbfz9lbjYe9rWrzGWZcWM7QvhL5uvsgX00aETyIjnY'
       token={handleToken}
       label="Attach Account To Pay"
    //    shippingAddress
    //    billingAddress
       amount={999}
      //  name="Attach Account To Pay"
       ></StripeCheckout>
          <Grid item xs={12} lg={12} md={12}>
          <TextField
            fullWidth
            label="Product Name"
            onChange={ChangeEvent}
            name="name"
            value={formData.name}
          />
          </Grid>
          <Grid item xs={12} lg={6} md={6}>
          <TextField
            fullWidth
            label="Barcode"
            onChange={ChangeEvent}
            name="code"
            value={formData.code}
          />
          </Grid>
       
          <Grid item xs={12} lg={6} md={6}>
          <TextField
            fullWidth
            label="Price"
            onChange={ChangeEvent}
            name="price"
            value={formData.price}
          />
          </Grid>


          

          <Grid item xs={12} lg={6} md={6}>
          <TextField
            fullWidth
            label="Quantity"
      
            onChange={ChangeEvent}
            name="quantity"
            value={formData.quantity}
          />
          </Grid>

          <Grid item xs={12} lg={6} md={6}>
          <TextField
            fullWidth
            label="Modem"
            
            onChange={ChangeEvent}
            name="modem"
            value={formData.modem}
          />
          </Grid>


          <Grid item xs={12} lg={6} md={6}>
          <TextField
            fullWidth
            label="Category"
            
            onChange={ChangeEvent}
            name="category"
            value={formData.category}
          />
          </Grid>


          <Grid item xs={12} lg={6} md={6}>
          <TextField
            fullWidth
            label="Router Type"
            
            onChange={ChangeEvent}
            name="router"
            value={formData.router}
          />
          </Grid>
          <Grid item xs={12} lg={6} md={6}>
          <TextField
            fullWidth
            label="Cable Type"
        
            onChange={ChangeEvent}
            name="cableType"
            value={formData.cableType}
          />
          </Grid>
          <Grid item xs={12} lg={12} md={12}>
          <TextField
            fullWidth
            label="Description"
        
            onChange={ChangeEvent}
            name="description"
            value={formData.description}
          />
          </Grid>

        
          <Grid item xs={12} lg={4} md={4}>
         
       <Barcode value={'product='+name+'&price='+price} 
 /> 
          {/* <QRCode value={'https://www.example.com/buy?product='+name+'&price='+price} 
          /> */}

          </Grid>

          <Grid item xs={12} lg={12} md={12} justifyContent="center">
          <Button
           onClick={handleSubmit}
          className={classes.button}
        variant="contained"
    
        endIcon={<RiSendPlane2Fill/>}
      >
       Add Product
      </Button>
            </Grid>
         
        </Grid>
            
          </form>
        
        
       
          </Paper>
         
        </Grid>

        
       
      </Grid> 
















</>








  );
};

export default AddProducts;