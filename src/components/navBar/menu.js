import { connect } from "react-redux";
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from "react-router-dom";
import { signOut } from "./../../actions/index";

function MenuItemComponent({user,signOut}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const checkIfAdminOrNot = ()=>{
    if(user){
      if(user.isAdmin){
        return(
          <div>
            <MenuItem onClick={handleClose}><Link className="nav-link p-0 text-secondary" to="/manageProuduct">Manage Prouduct</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link onClick={()=>{signOut()}} className="nav-link p-0 text-secondary" to="/logIn">Logout</Link></MenuItem>
          </div>
        )
      }
      else{
        return(
          <div>
            <MenuItem onClick={handleClose}><Link className="nav-link p-0 text-secondary" to="/user/order">My Profile</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link onClick={()=>{signOut()}} className="nav-link p-0 text-secondary" to="/logIn">Logout</Link></MenuItem>
          </div>
          )
      }
    }
  }
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className="text-white"
      >
        {user?user.firstName:""}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {checkIfAdminOrNot()}
      </Menu>
    </div>
  );
}

export default connect(null,{signOut}) (MenuItemComponent);
