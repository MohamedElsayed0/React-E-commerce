import "./sideBar.scss";
import * as React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { toggeleDrawer, signOut,protectRoute } from "./../../actions/index";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

const TemporaryDrawer = (props) => {
  const toggleDrawer = (open) => (_) => {
    props.toggeleDrawer(open);
  };

  return (
    <React.Fragment>
      <Drawer
        anchor="left"
        open={props.drawerState}
        onClose={toggleDrawer(false)}
      >
        <div className="rab-drawar ">
          <h5 className="p-2 pb-3 bg-dark text-white text-center rounded" >
            Settings
          </h5>
          <List>
            <NavLink
              exact
              activeClassName="is-active"
              className="nav-link p-0"
              to="/"
            >
              <ListItem button onClick={toggleDrawer(false)}>
                <ListItemText secondary="Home" />
              </ListItem>
            </NavLink>

            <NavLink
              activeClassName="is-active"
              className="nav-link p-0"
              to="/user/order"
              onClick={()=>{
                if(props.user){
                  return null
                }
                props.protectRoute()
              }}
            >
              <ListItem button onClick={toggleDrawer(false)}>
                <ListItemText secondary="Your Account" />
              </ListItem>
            </NavLink>
            {props.user ? (
              <NavLink
                activeClassName="is-active"
                className="nav-link p-0"
                to="/"
              >
              <ListItem
                button
                onClick={() => {
                  props.signOut();
                  toggleDrawer(false);
                }}
              >
                <ListItemText secondary="Sign Out" />
              </ListItem>
              </NavLink>
            ) : (
              <NavLink
                activeClassName="is-active"
                className="nav-link p-0"
                to="/sign-up"
              >
                <ListItem button onClick={toggleDrawer(false)}>
                  <ListItemText secondary="Sign Up" />
                </ListItem>
              </NavLink>
            )}
          </List>
          <Divider />

          <NavLink
            activeClassName="is-active"
            className="nav-link p-0 mt-2"
            to="/Products"
          >
            <ListItem button onClick={toggleDrawer(false)}>
              <ListItemText secondary="All Products" />
            </ListItem>
          </NavLink>
          <h5 className="p-2 pb-3 bg-dark text-white text-center rounded">
            Shop By Category
          </h5>
          <List>
            {props.categorys.map((category, index) => (
              <NavLink
                activeClassName="is-active"
                className="nav-link p-0"
                to={`/oneCategory/${category.name}`}
                key={index}
              >
                <ListItem button onClick={toggleDrawer(false)}>
                  <ListItemText secondary={category.name} />
                </ListItem>
              </NavLink>
            ))}
          </List>
        </div>
      </Drawer>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    drawerState: state.drawerState,
    user: state.currntUser,
    categorys: state.category,
  };
};

export default connect(mapStateToProps, {
  toggeleDrawer,
  signOut,
  protectRoute
})(TemporaryDrawer);
