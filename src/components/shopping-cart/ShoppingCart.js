import {connect} from "react-redux";
import ShoppingCartItem from "./shoppingCartItem";
import Button from '@mui/material/Button';
import CheckIcon from '@mui/icons-material/Check';
import { Link } from "react-router-dom";


const ShoppingCart = ({cartItems}) => {

  let counter = 0 ;
  let totalPricecounter = 0;

  if(cartItems){
    for (const key in cartItems) {
        counter += cartItems[key].quantatiy;
        let itemPric = cartItems[key].product.price;
        let quantatiy = cartItems[key].quantatiy;
        totalPricecounter += itemPric * quantatiy
  }
}

  return (
      <div className="ShoppingCart container">
        <div className="row">
          <div className="col-md-8 col-12">
              <div className="">
                <h2 className="fw-bold pb-2">Shopping Cart</h2>
              </div>
                {cartItems? (
                  Object.entries(cartItems).map(([key,value],index)=>(
                      <ShoppingCartItem key={key} val={value} pID={key} itemCount={counter}/>
                    ))):(

                      <div className="card row align-items-center p-2" style={{flexDirection:"row"}}>

                        <div className="col-md-5 col-12">
                          <img className="img-fluid" src="https://m.media-amazon.com/images/G/42/cart/empty/kettle-desaturated._CB659190457_.svg" alt=""/>
                        </div>

                        <div className="col-md-7 col-12 text-center">
                          <h2 className="pb-2">Your basket is empty</h2>
                          <Button variant="outlined" >
                              <Link to="/products" className="nav-link">
                                  Continue Shopping
                              </Link>
                          </Button>
                        </div>

                      </div>
                    )
                }
          </div>
          {
            cartItems ? (
              <div className="col-md-4 col-12 text-center">
                <div className="bg-white p-3">
                    <span  className="text-success" style={{fontSize:"14px"}}>
                      <CheckIcon/> Your order qualifies for FREE Shipping
                    </span>
                    <div className="h5 pt-3 text-center">
                          <span>Subtotal </span>
                        ({counter} items): {new Intl.NumberFormat('eg-EG', { style: 'currency', currency: 'EGP' }).format(totalPricecounter)}
                    </div>
                    <div className="pt-3">
                    <Button variant="outlined" >
                        <Link to="/CheckOut" className="nav-link">
                            Proceed To Buy
                        </Link>
                    </Button>
                    </div>
                </div>
              </div>
            ):(
              null
            )
          }
        </div>
      </div>
  )
};
const mapStateToProps = (state)=>{
  return{
    cartItems:state.shoppingCartItems
  }
}
export default connect(mapStateToProps) (ShoppingCart);
