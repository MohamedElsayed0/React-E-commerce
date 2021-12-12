import {connect} from "react-redux";
import { Link } from "react-router-dom";

const Adress = ({user})=>{
  return (
    <div className="col-12 ">
        <div className="shadow p-3 mb-5 bg-white rounded">
            <h2 className="pb-2">Your Adress</h2>
              <ul className="list-group list-group-flush">
                <li className="list-group-item"><span className="fw-bold">Name: </span>{user.firstName+ " " +user.lastName}</li>
                <li className="list-group-item"><span className="fw-bold">Country: </span> {user.country} </li>
                <li className="list-group-item"><span className="fw-bold">City: </span> {user.city} </li>
                <li className="list-group-item"><span className="fw-bold">Area: </span>  {user.area}</li>
                <li className="list-group-item"><span className="fw-bold">Phone Number: </span> {user.phoneNumber}</li>
              </ul>
        <div className="">
            <Link to={`/sign-up?uid=${user.uid}`} className="nav-link" >Edit</Link>
        </div></div>
    </div>
  )
}

const mapStateToProps = (state)=>{
    return {
      user:state.currntUser
    }
}
export default connect(mapStateToProps)(Adress)
