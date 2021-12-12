import {connect} from "react-redux";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import Divider from '@mui/material/Divider';
import {addOrder,removeAllItemsFromCart} from "../../actions"

const CheckOut = ({cartItems, user, addOrder,removeAllItemsFromCart})=>{

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
    <div className="CheckOut container">
      <div className="row align-items-start">
        <div className="col-md-9 col-12 pb-4">

            <div className="bg-white p-3 border rounded">
              <div className="h3"> Ship to your delivery address </div>
              <Divider className="pt-1 pb-1"/>
              <h5 className="pt-1 text-success"> Your Delivery address </h5>
                {user? (
                  <div className="text-secondary pl-2" style={{paddingLift:"10px"}}>
                    <span > <span style={{fontWeight:"bold"}}> Name : </span>{`${user.firstName} ${user.lastName}`}</span><br/>
                    <span > <span style={{fontWeight:"bold"}}> Country  : </span>{user.country}</span><br/>
                    <span > <span style={{fontWeight:"bold"}}> City  : </span>{user.city}</span><br/>
                    <span > <span style={{fontWeight:"bold"}}> Area & Street Name : </span>{user.area}</span><br/>
                    <span > <span style={{fontWeight:"bold"}}> Phone Number : </span>{user.phoneNumber}</span><br/>
                    <div className="text-end">
                        <Button variant="outlined" color="success">
                            <Link to={`/sign-up?uid=${user.uid}`} className="nav-link text-success p-0">
                                Edite your address
                            </Link>
                        </Button>
                    </div>
                  </div>
                ):null}
            </div>

            <div className="bg-white p-3 mt-3 border rounded">
              <h5> Items shipped </h5>
              <div className="container-fluid">
              {
                cartItems? (
                    Object.entries(cartItems).map(([key,value],index)=>(
                      <div className="row mt-4 align-items-center" key={key}  >
                        <div className="col-md-3 col-12">
                          <img className="img-fluid" src={value.product.imgUrl1} alt={value.product.brand}/>
                        </div>
                        <div className="col-md-9 col-12">
                          <div className="mb-2">{value.product.title}</div>
                          <div className="text-danger">{new Intl.NumberFormat('eg-EG', { style: 'currency', currency: 'EGP' }).format(value.product.price)}</div>
                          <div className="mt-2">Qty: {value.quantatiy}</div>
                        </div>
                      </div>
                    ))
                ): null
              }
              </div>
            </div>
            <div className="bg-white p-3 mt-3 border rounded d-flex align-items-center">
                <Button variant="outlined" color="success"  onClick={()=>{addOrder(user.uid,cartItems);removeAllItemsFromCart()}}>
                    <Link to="/thankYou" className="nav-link text-success p-0">
                        Place your order
                    </Link>
                </Button>
                <div className="m-2 text-danger"  style={{fontWeight:"bold"}}>
                  Order total: {new Intl.NumberFormat('eg-EG', { style: 'currency', currency: 'EGP' }).format(totalPricecounter)}
                </div>
            </div>
        </div>
        <div className="col-md-3 col-12 bg-white border rounded pt-3 pb-3">
            <div className=" row text-center ">
                <div>
                    <Button variant="outlined" color="success" style={{width:"100%"}} onClick={()=>{addOrder(user.uid,cartItems);removeAllItemsFromCart()}}>
                        <Link to="/thankYou" className="nav-link text-success p-0">
                            Place your order
                        </Link>
                    </Button>
                </div>
                <div className="pt-2 pb-2" style={{fontSize:"12px"}}>
                  By placing your order, you agree to OnReQuesT.eg's privacy notice and conditions of use.
                </div>
                <div>
                  <Divider/>
                </div>
                <div className="text-start ">
                  <h5 className="pt-3 pb-3">Order Summary</h5>
                  <div className = "row">
                      <span className="col-6">Items</span>
                      <span className="col-6 text-end">{counter}</span>
                      <span className="col-6">Total</span>
                      <span className="col-6 text-end">
                        {new Intl.NumberFormat('eg-EG', { style: 'currency', currency: 'EGP' }).format(totalPricecounter)}
                      </span>
                  </div>
                </div>
             </div>
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = (state)=>{
  return{
    cartItems:state.shoppingCartItems,
    user:state.currntUser
  }
}
export default connect(mapStateToProps,{addOrder,removeAllItemsFromCart})(CheckOut);
