import { connect } from "react-redux";
import {Link} from "react-router-dom";
import { addProduct } from "../../actions";

const AddProuduct = ({addProduct}) => {

  return (
    <div className="AddProuduct container">
      <div className="row text-center ">
          <h2 className="mb-3 fw-bold">Sellect Category</h2>
          <div className="col-md-6 col-12 p-2">
            <Link to ="/addProudct/camera" className="nav-link text-dark fw-bold bg-white rounded">Camera</Link>
          </div>

          <div className="col-md-6 col-12 p-2">
          <Link to ="/addProudct/Head-phones" className="nav-link text-dark fw-bold bg-white rounded">Headphones</Link>
          </div>

          <div className="col-md-6 col-12 p-2">
          <Link to ="/addProudct/Home-Decor" className="nav-link text-dark fw-bold bg-white rounded">Home Decor</Link>
          </div>

          <div className="col-md-6 col-12 p-2">
          <Link to ="/addProudct/Jewelry" className="nav-link text-dark fw-bold bg-white rounded">Jewelry</Link>
          </div>

          <div className="col-md-6 col-12 p-2">
          <Link to ="/addProudct/Laptop" className="nav-link text-dark fw-bold bg-white rounded">Laptop</Link>
          </div>

          <div className="col-md-6 col-12 p-2">
          <Link to ="/addProudct/Mobile" className="nav-link text-dark fw-bold bg-white rounded">Mobile</Link>
          </div>

          <div className="col-md-6 col-12 p-2">
          <Link to ="/addProudct/TVs" className="nav-link text-dark fw-bold bg-white rounded">TVs</Link>
          </div>

          <div className="col-md-6 col-12 p-2">
          <Link to ="/addProudct/Watches" className="nav-link text-dark fw-bold bg-white rounded">Watches</Link>
          </div>
          <div className="col-md-6 col-12 p-2">
          <Link to ="/addProudct/other" className="nav-link text-dark fw-bold bg-white rounded">Other</Link>
          </div>
      </div>
    </div>
  );
};

export default connect(null,{addProduct}) (AddProuduct);
