import React, { useState} from "react";
import {useNavigate } from "react-router-dom";
import { RiVideoFill } from "react-icons/ri";
import {motion} from 'framer-motion';
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  SwipeableDrawer,
  ListItem,
  ListItemText,
  ListItemIcon,
  Hidden,
  Divider,

} from "@material-ui/core";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AdminMenu from "./AdminMenu";

import {  Routes, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import {ServiceAccordtion} from "./SideBarItems";

// import AdminProfile from "../AdminProfile";
// import Payment from "../Payments/Payment";

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AdminHome from "./AdminHome";
import AddProducts from "./AddProducts";
import AllProducts from "./AllProducts";
import Payments from "./Payments";

const drawerWidth = 250;
const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("sm")]: { paddingLeft: drawerWidth },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  title: {
    marginRight: "auto",
    fontWeight:'bold',
    fontSize:'30px',
    color:'#151D3B'

  },
  drawer: {
    width: drawerWidth,
  },
paper:{
    backgroundColor:'#151D3B',
  },

  content: {
    padding: theme.spacing(0, 1),
  },
  link: {
    padding:'8px',
    color: "white",
    fontWeight: "bold",
  },
  logo:{
    height:'150px',
    objectFit:'cover',
    width:drawerWidth,
  },
  services:{
backgroundColor:'#151D3B',
boxShadow:'none',
color:'white'
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  appBar: {
    background:'#D8E3E7',
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },

  },
}));

const AdminDashboard = () => {
  const navigate=useNavigate();
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  
  const drawerItems = (
    <>
   
      <Divider />
      {/* like hr in html */}
      {
        // LeftBarData.map(items=>(
        //   <ListItem button key={items.id} onClick={()=>navigate(items.path)}  className={classes.link}>
        //   <ListItemIcon style={{ fontSize: 25,color:'white' }}>
        //     {items.icon}
        //     {/* <AllInboxIcon /> */}
        //   </ListItemIcon>
        //   <ListItemText primary={items.title} />
        // </ListItem>
        // ))
      }
    


    </>
  );

  const drawerAccordtion = (
    <>
<Accordion className={classes.services}>
<AccordionSummary  expandIcon={<ExpandMoreIcon style={{ fontSize: 25,color:'white' }}/>}>
  
        <ListItemIcon >
          <RiVideoFill style={{ fontSize: 25,color:'white' }}/>
          </ListItemIcon>
          <ListItemText primary="Products" />
        </AccordionSummary>
      {
        ServiceAccordtion.map(itemsS=>(
          <ListItem button key={itemsS.id} onClick={()=>navigate(itemsS.path)}  className={classes.link}>
          <ListItemIcon style={{ fontSize: 20,color:'white' }}>
            {itemsS.icon}
          </ListItemIcon>
          <ListItemText primary={itemsS.title} />
        </ListItem>
        ))
      }
      </Accordion>

    </>
  );
  return (
    <div className={classes.root}>
      <AppBar position="fixed"  className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>

          <motion.Typography  variant="h6" className={classes.title} initial={{y:'-100vh'}}
                     animate={{y:0}}
                     transition={{ ease: "easeOut", duration: 1 ,type:'spring' }}>
          Inventory DashBoard
          </motion.Typography>

          {/* Show admin profile and logout */}
          <AdminMenu/>
        </Toolbar>
      </AppBar>
        {/* Drawer for small devices */}
      <Hidden smUp implementation="css">
        <SwipeableDrawer classes={{ paper: classes.paper }}  open={open} onClose={() => setOpen(false)} onOpen={() => setOpen(true)}>
           {/* {drawerAccordtion} */}
           {drawerAccordtion}
          {drawerItems} 
         
         
        </SwipeableDrawer>
      </Hidden>
      {/* Drawer for large devices */}
      <Hidden xsDown implementation="css">
        <Drawer  classes={{ paper: classes.paper }} open={open} variant="permanent" onClose={() => setOpen(false)}>
        {drawerAccordtion}
          {drawerItems}
        
        </Drawer>
      </Hidden>

      <main className={classes.content}>
        <div className={classes.toolbar} />
          <Routes>
          <Route exact path="/" element={<AdminHome/>}/>
          <Route exact path="/allPr" element={<AllProducts/>}/>
          <Route exact path="/addProduct" element={<AddProducts/>}/>
        
       <Route exact path="payment" element={<Payments />}/> 
          {/* <Route exact path="profile" element={<AdminProfile />}/> */}
             </Routes>
      </main>

    </div>
  );
};

export default AdminDashboard;
