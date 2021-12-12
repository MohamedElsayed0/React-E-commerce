import  React,{useEffect} from 'react';
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { connect } from "react-redux";

import { deleteProduct,getOneProduct} from "../../actions";


const ManageProuduct = ({products,deleteProduct,getOneProduct})=> {
const [currentPoducts, setCurrentPoducts] = React.useState([]);
const [typeSearch, setTypeSearch] = React.useState('');
const [placeholder, setPlaceholder] = React.useState('title');


  useEffect(()=>{
      setCurrentPoducts( Object.entries(products) );
  },[products])

  const filter=(event)=>{
    const val = event.target.value;
    if (typeSearch === "category") {
      setCurrentPoducts(
        Object.entries(products).filter(
          ([key,value],i)=>value.category.toLocaleLowerCase().includes(val.toLocaleLowerCase()))
      )
    }else{
      setCurrentPoducts(
        Object.entries(products).filter(
          ([key,value],i)=>value.title.toLocaleLowerCase().includes(val.toLocaleLowerCase()))
      )
    }
  }

  const deletePro = (id)=>{
      if(window.confirm('Are you sure you want delet the product ?')){
        deleteProduct(id)
      }
  }


  return(
    <div className="ManageProuduct container">
      <div className="row">

            <Link className="nav-link " to="/addProudct" style={{width:"auto"}}>
              <Button color="" className="bg-dark text-white"><AddIcon/> Add Product </Button>
            </Link>

            <p className="d-flex flex-wrab">
              <select name="category" id="cars" className="" style={{Width:"160px"}}
                onChange={(e)=>{
                  setTypeSearch(e.target.value);
                  if(e.target.value===""){
                    setPlaceholder("title");
                  }else{
                    setPlaceholder(e.target.value);
                  }
                }}>
                  <option value="">Select type of searching</option>
                  <option value="title">Title</option>
                  <option value="category">Category</option>
              </select>
              <input
                  type="text"
                   className="form-control"
                   placeholder={`Search by ${placeholder}`}
                   onChange={filter}
                   style={{minWidth:"160px"}}/>
            </p>

            <table className="table table-hover table-dark">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Title</th>
                  <th scope="col">Category</th>
                  <th scope="col">Price</th>
                  <th scope="col">Edite</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {products? currentPoducts.map(([key,value],index)=>(
                  <tr key={key}>
                    <th scope="row">{index+1}</th>
                    <td>{value.title.length > 50 ? value.title.substr(0,50) + " ..." : value.title}</td>
                    <td>{value.category}</td>
                    <td>
                      {new Intl.NumberFormat('eg-EG', { style: 'currency', currency: 'EGP' }).format(value.price)}
                    </td>
                    <td>
                      <Link className="text-light nav-link p-0" to={`/addProudct/${value.category}?pid=${key}`}>
                        <Button color="primary" className="text-success">Edite<EditIcon /></Button>
                      </Link>
                    </td>
                    <td>
                      <Link onClick={()=>{deletePro(key)}} className="text-light nav-link p-0" to={`/manageProuduct`}>
                        <Button color="primary" className="text-danger">Delete<DeleteIcon /></Button>
                      </Link>
                    </td>
                  </tr>
                )):""}
              </tbody>
            </table>

      </div>
    </div>

  )
}
const mapStateToProps = (state) => {
  return {
    products:state.products
  };
};

export default connect(mapStateToProps,{deleteProduct,getOneProduct}) (ManageProuduct);
