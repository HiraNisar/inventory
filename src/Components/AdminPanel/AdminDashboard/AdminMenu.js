import React from "react";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import { useNavigate,Link} from "react-router-dom";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import { ListItemIcon } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
// import {Menus} from "./SideBarItems";
import { ListItem,ListItemText } from "@material-ui/core";
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection:'column'
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

export default function AdminMenu() {
  const navigate=useNavigate();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    // if (prevOpen.current === true && open === false) {
    //   anchorRef.current.focus();
    // }

    prevOpen.current = open;
  }, [open]);

  return (
      <div>
        <Avatar
          src="/broken-image.jpg"
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        />

        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper >
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList 
                 
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                
                    <MenuItem  className={classes.root} onClick={handleClose}>
                    {
        //     Menus.map(items=>(
          
        //   <ListItem  button key={items.id} onClick={()=>navigate(items.path)}>
        //   <ListItemIcon>
        //   <PermContactCalendarIcon fontSize="small" />
        //   </ListItemIcon>
        //   <ListItemText primary={items.title} />
      
        // </ListItem>
        
        // ))
        
      }   
     


                    </MenuItem>
                
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    
  );
}
