import React,{useState,useEffect} from "react";
import { connect } from "react-redux";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

const ThankYou = ({order,user}) => {
  const [orderId,serOrderId] = useState('');
  const [orderVal,serOrderVal] = useState(null);

  useEffect(()=>{
    if(order){
        serOrderId(order.key)
        serOrderVal(order.val())
    }
  },[order]);


  return (
    <div className="ThankYou container">
        <div className="row">
          <h1 className="text-center">
            Thank <span className="text-success">{user?user.firstName:null}</span>
          </h1>
          <h3 className="text-center">we are currently placing your order</h3>

          <div className="bg-white mt-3 p-2">

              <h4 className="m-2 bg-secondary p-2"><span className="badge bg-success">Order ID</span> {orderId}</h4>
              <h4 className="m-2 bg-secondary p-2"><span className="badge bg-success">Order Date</span> {orderVal?orderVal.orderDate:""}</h4>
              <h4 className="m-2 bg-secondary p-2"><span className="badge bg-success">Order Time</span> {orderVal?orderVal.orderTime:""}</h4>

          </div>

          <div className="bg-white my-3 p-3 ">
            <div className="row align-items-center">

              <span className="fs-4 fw-bold text-success">
                  <span className="text-"><LocalShippingIcon className="fs-1 text-dark"/> </span>
                  Shipment
              </span>

              {
                orderVal ? (
                  Object.entries(orderVal.items).map(([key,value],i)=>(
                    <div className="col-md-6 col-12 row mt-4 align-items-center" key={key}>
                      <div className="col-12 row">
                      <div className="col-4">
                        <img className="img-fluid" src={value.product.imgUrl1} alt={value.product.title}/>
                      </div>

                          <div className="col-8">

                            <div className="">
                              {value.product.title}
                            </div>

                            <div className="pt-2 text-success fw-bold">
                              {new Intl.NumberFormat('eg-EG', { style: 'currency', currency: 'EGP' }).format(value.product.price)}
                            </div>

                          </div>

                        </div>
                      </div>

                ))
              ):null
              }

              <div className="text-center">
                <Button variant="outlined" color="success" className="my-4">
                    <Link to={`/Products`} className="nav-link text-success p-0">
                        Continue Shopping
                    </Link>
                </Button>
              </div>


            </div>

          </div>
        </div>
    </div>
  )
}
const mapStateToProps = (state)=>{
  return{
    order:state.oneOrder,
    user:state.currntUser
  }
}
export default connect(mapStateToProps)(ThankYou);
