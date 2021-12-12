import {useEffect,useState} from "react";
import {connect} from "react-redux";
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

const Orders = ({user})=>{
  const [orders,setOrders] = useState({})
  useEffect(()=>{
    if(user){
      setOrders(user.Orders)
    }
  },[user])
  return (
    <div className="col-12">
        <h2 className="pb-3 text-secondary fw-bold">Your Orders</h2>
        {orders?(
          Object.entries(orders).map(([key,value],index)=>(
            <div key={key} className="row">
              <div className="col-12 row pb-4">
                    <div className="col-md-6 col-12"> <span className="fw-bold">OrderId : </span> ({key}) <br/></div>
                    <div className="col-md-6 col-12"><span className="fw-bold">Order placed : </span>  {value.orderDate}</div>
                    <div className="col-md-6 col-12"><span className="fw-bold">Payment method :</span> Cash On Delivery</div>
                    <div className="col-md-6 col-12"><span className="fw-bold">Recipient: </span>{user.firstName+ " " +user.lastName} </div>

                    <div className="col-12">

                          {Object.entries(value.items).map(([key,value],index)=>{
                            return <div key={key} className="d-flex mt-4 p-2 align-items-center justify-content-center bg-white">
                              <div className="col-4">
                                <img className="img-fluid" src={value.product.imgUrl1} alt={value.product.title}/>
                              </div>
                              <div className="col-7">
                                {value.product.title}
                              </div>
                            </div>
                          })}
                          <Divider className="mt-3"/>
                    </div>
              </div>
            </div>
          ))
        ):(
          <div className="text-center pt-2 bg-white p-3">
              <h3>You have no order yet !</h3>
              <Button variant="outlined" className="bg-dark mt-2">
                  <Link to="/products" className="nav-link text-white">
                      Make order
                  </Link>
              </Button>
          </div>
        )}
    </div>
  )
}

const mapStateToProps = (state)=>{
    return {
      user:state.currntUser
    }
}
export default connect(mapStateToProps)(Orders);
