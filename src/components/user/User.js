import {Route, Switch , Link} from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import {connect} from "react-redux";
import Orders from "./userOrders.js"
import Adress from "./userAdress.js"

const User = ({user,match}) => {
  return (
    <div className="container">
        <div className="row align-items-start">
          <div className="col-md-4 col-12 bg-white p-3 mb-2">
              <h3 className="text-secondary">
                <span ><PersonIcon style={{fontSize:"35px"}} /> </span> {user?user.firstName +" "+ user.lastName : ""}
              </h3>
              <h6>{user?user.email:""}</h6>
              <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                 <nav aria-label="main mailbox folders">
                   <List>
                     <Link to={`${match.url}/order`} className="nav-link p-0 text-secondary">
                         <ListItem disablePadding>
                           <ListItemButton>
                             <ListItemIcon>
                               <BeenhereIcon />
                             </ListItemIcon>
                             <ListItemText primary="Your Orders" />
                           </ListItemButton>
                         </ListItem>
                     </Link>

                     <Link to={`${match.url}/adress`} className="nav-link p-0 text-secondary">
                         <ListItem disablePadding>
                           <ListItemButton>
                             <ListItemIcon>
                               <AlternateEmailIcon />
                             </ListItemIcon>
                             <ListItemText primary="Your Adresses" />
                           </ListItemButton>
                         </ListItem>
                     </Link>


                   </List>
                 </nav>
             </Box>
          </div>

          <div className="col-md-8 col-12">
            <Switch>
                  <Route path={`${match.url}/order`} component={Orders}/>
                  <Route path={`${match.url}/adress`} component={Adress}/>
            </Switch>
          </div>
        </div>
    </div>
  )
};

const mapStateToProps = (state)=>{
    return {
      user:state.currntUser
    }
}
export default connect(mapStateToProps) (User);
