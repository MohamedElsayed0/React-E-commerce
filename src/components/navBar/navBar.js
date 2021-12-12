import "./navBar.scss";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import TemporaryDrawer from "./../sideBar/SideBar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { connect } from "react-redux";
import { toggeleDrawer } from "./../../actions/index";
import AutoComplete from "../autoComplete/AutoComplet";

import { Link } from "react-router-dom";
import MenuItemComponent from "./menu";
const NavBar = (props) => {
  let counter = 0;

  if (props.cartItems) {
    for (const key in props.cartItems) {
      counter += props.cartItems[key].quantatiy;
    }
  }
  return (
    <Box sx={{ flexGrow: 1 }} className="box">
      <AppBar position="fixed" className="App-Bar">
        <Toolbar className="tool-bar">
          <IconButton
            onClick={() => {
              props.toggeleDrawer(true);
            }}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            className="d-flex align-items-center"
          >
            <span className="col-3">
              <Link
                to="/"
                className="nav-link text-light p-0"
                style={{ width: "20%" }}
              >
                OnRequest
              </Link>
            </span>
            <div className="col-7 d-none d-sm-block ">
              <AutoComplete />
            </div>
          </Typography>

          {props.user ? (
            <MenuItemComponent user={props.user} />
          ) : (
            <Link className="nav-link text-light" to="/sign-up">
              <Button color="inherit">Login</Button>
            </Link>
          )}

          <Link to="/shopping-cart">
            <IconButton>
              <Badge color="secondary" badgeContent={counter} showZero>
                <ShoppingCartIcon className="text-white" />
              </Badge>
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
      <TemporaryDrawer />
    </Box>
  );
};
const mapStateToProps = (state) => {
  return {
    drawerState: state.drawerState,
    user: state.currntUser,
    cartItems: state.shoppingCartItems,
  };
};
export default connect(mapStateToProps, { toggeleDrawer })(NavBar);
