import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {connect} from "react-redux";
import {addProuductTocart,removeProuductFromCart,removeItemFromCart} from "../../actions";
const ShoppingCartItem = ({pID,val,addProuductTocart,removeProuductFromCart,removeItemFromCart})=>{
  return (
    <div className = "ShoppingCartItem pt-2">
          <div className="card row align-items-center" style={{flexDirection:"row"}} >
            <div className="pt-1 col-md-4 col-12">
              <img className="card-img-top img-fluid" src={val.product.imgUrl1} alt={val.product.title}/>
            </div>
            <div className="card-body col-md-8 col-12">

                <p className="card-text pt-1">{val.product.title}</p>
                <p className="card-text pt-1 text-success" style={{fontWeight:"bold"}}> {
                  new Intl.NumberFormat('eg-EG', { style: 'currency', currency: 'EGP' }).format(val.product.price)
                }</p>


                <div className="">
                    <Button color="error" variant="outlined" onClick={()=>{removeProuductFromCart(pID,val)}}>
                      <RemoveIcon/>
                    </Button>
                      <span className="p-1 text-secondary" style={{fontWeight:"bold"}}>Qty: {val.quantatiy}</span>
                    <Button variant="outlined" onClick={()=>{addProuductTocart(pID,val)}}>
                        <AddIcon/>
                    </Button>
                </div>


                <div className="pt-3 text-end">
                    <Button color="error" variant="contained" onClick={(e)=>{
                      e.target.parentNode.parentNode.parentNode.classList.add("fade");
                      setTimeout(()=>{
                        removeItemFromCart(pID)
                      },1000)
                    }}>Delete</Button>
                </div>
            </div>

          </div>
    </div>
  )
}

export default connect(null,{addProuductTocart,removeProuductFromCart,removeItemFromCart}) (ShoppingCartItem);
