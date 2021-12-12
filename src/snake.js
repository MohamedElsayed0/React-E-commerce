import React,{useEffect,useState} from "react";
import { connect } from "react-redux";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import {
  checkUser,
  getProducts,
  getCategorys,
  getAllFromShoppingCart,
} from "./actions";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SnakeComponent = ({checkUser,getProducts,getCategorys,getAllFromShoppingCart,success,error}) => {

  useEffect(()=>{
    checkUser();
    getProducts();
    getCategorys();
    getAllFromShoppingCart();

  },[checkUser, getProducts, getCategorys, getAllFromShoppingCart])
    const [open, setOpen] = React.useState(false);
    const [sOpen, setSOpen] = React.useState(false)

    const [snake, setSnake] = React.useState("");
    const [snake2, setSnake2] = React.useState('');

    const handleClose = () => {
      setOpen(false);
    };

    const handleClose2 = () => {
      setSOpen(false);
    };
    useEffect(()=>{
      if(success){
        setSnake2("")
        setSnake2(success)
        setSOpen(true)
      }

    },[success])

    useEffect(()=>{
      if(error){
        setSnake('');
        setSnake(error);
        setOpen(true);
      }
    },[error])
    return(
        <div>
            <Snackbar open={open} onClose={handleClose} key={"right"}>
              <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                {snake}
              </Alert>
            </Snackbar>

            <Snackbar open={sOpen} onClose={handleClose2} key={"left"}>
              <Alert onClose={handleClose2} severity="success" sx={{ width: '100%' }}>
                {snake2}
              </Alert>
            </Snackbar>
        </div>
  )
}

const mapStateToProps=(state)=>{
  return{
    success:state.auth,
    error:state.authErrorReduser
  }
}
export default connect(mapStateToProps,{
  checkUser,
  getProducts,
  getCategorys,
  getAllFromShoppingCart,
})(SnakeComponent);
