import "./item.scss"
import Button from '@mui/material/Button';
import {addProuductTocart} from "../../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Item = ({pID,val,addProuductTocart}) =>{
  return (
    <div className="item">

          <div className="card justify-content-center position-relative" style={{padding:".6rem"}}>

              <div className="position-relative img-container">

                <div className="float row justify-content-center align-items-center">

                    <div className="text-center translate2">
                      <Button className="All" >
                          <Link className="nav-link p-0 text-white " to={`/ProductDetails/${pID}`}>All Details</Link>
                      </Button>
                    </div>

                </div>
                <img className="card-img-top" src={val.imgUrl1} alt={"Card cap"} style={{maxHeight:"500px"}}/>
              </div>

            <div className="card-body">

                  <h5 className="card-title first-h5">{val.Brand}</h5>
                  <p className="card-text ">{val.title.length > 70 ? val.title.substr(0,70) + " ..." : val.title} </p>
                  <h5 className="card-title second-h5">{new Intl.NumberFormat('eg-EG', { style: 'currency', currency: 'EGP' }).format(val.price)}</h5>

                  <div className="text-end mt-3 ">
                    <Button className="btun text-white" onClick={
                      (e)=>{
                        addProuductTocart(pID,val);
                        e.target.parentNode.parentNode.parentNode.classList.add("animat");
                        setTimeout(()=>{
                          e.target.parentNode.parentNode.parentNode.classList.remove("animat");
                        },1000)
                      }
                    }>Add To Cart</Button>
                  </div>
            </div>

            <div className="discount">
              {val.discountPercentage?`${val.discountPercentage}%`:""}
            </div>
          </div>

    </div>
  )
}

export default connect(null,{addProuductTocart})(Item);
