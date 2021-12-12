import firebase from "../.././firebase";
import React,{useEffect,useState} from "react"
import {connect} from "react-redux";
import {getOneProduct, addProuductTocart} from "../../actions"
import CarouselComponent from "../carousel";
import Button from '@mui/material/Button';


const ProductDetails = ({match,addProuductTocart})=>{
  const [product,setProduct]=useState({});
  // console.log(product);
  let id = match.params.id;
  useEffect(()=>{
    if(id){
      firebase.database().ref(`Products/${id}`).on("value",(snapshot)=>{
        setProduct(snapshot.val())
      })
    }
  },[id])
  return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-12">
              <div className="imgDisplay">
                  <CarouselComponent imgval={product}/>
              </div>

              <div className="mt-5 mb-4 row">
                  <div className="col-12 text-center">
                    <Button className="bg-dark text-white" style={{width:"50%"}} onClick={()=>{addProuductTocart(id, product)}}>Add to cart</Button>
                  </div>
              </div>
          </div>

          <div className="col-md-6 col-12">
            <div className="fw-bold text-secondary">{product.title}</div>
            <hr/>

            <div>
            <table className="table">

            <tbody >
                <tr>
                    <th scope="row"></th>
                    <td className="fw-bold">Brand</td>
                    <td>{product.Brand}</td>
                </tr>
                <tr>
                    <th scope="row"></th>
                    <td className="fw-bold">Color</td>
                    <td>{product.color}</td>
                </tr>
                <tr>
                    <th scope="row"></th>
                    <td className="fw-bold">Price</td>
                    <td>{new Intl.NumberFormat('eg-EG', { style: 'currency', currency: 'EGP' }).format(product.price)}</td>
                </tr>
                {product.cpuModel? (
                  <tr>
                      <th scope="row"></th>
                      <td className="fw-bold">Cpu Model</td>
                      <td>{product.cpuModel}</td>
                  </tr>
                ):null}
                {product.hardDiskSize? (
                  <tr>
                      <th scope="row"></th>
                      <td className="fw-bold">Hard Disk Size</td>
                      <td>{product.hardDiskSize}</td>
                  </tr>
                ):null}
                {product.operatingSystem? (
                  <tr>
                      <th scope="row"></th>
                      <td className="fw-bold">Operating System</td>
                      <td>{product.operatingSystem}</td>
                  </tr>
                ):null}
                {product.ramSize? (
                  <tr>
                      <th scope="row"></th>
                      <td className="fw-bold">Ram Size</td>
                      <td>{product.ramSize}</td>
                  </tr>
                ):null}
                {product.screenSize? (
                  <tr>
                      <th scope="row"></th>
                      <td className="fw-bold" style={{width:"100px"}}>Screen Size</td>
                      <td>{product.screenSize}</td>
                  </tr>
                ):null}

                {product.digitalCameraType? (
                  <tr>
                      <th scope="row"></th>
                      <td className="fw-bold" style={{width:"100px"}}>DigitalCamera Type</td>
                      <td>{product.digitalCameraType}</td>
                  </tr>
                ):null}

                {product.formFactor? (
                  <tr>
                      <th scope="row"></th>
                      <td className="fw-bold" style={{width:"100px"}}>Form Factor</td>
                      <td>{product.formFactor}</td>
                  </tr>
                ):null}

                {product.opticalZoom? (
                  <tr>
                      <th scope="row"></th>
                      <td className="fw-bold" style={{width:"100px"}}>Optical Zoom</td>
                      <td>{product.opticalZoom}</td>
                  </tr>
                ):null}

                {product.touchScreen? (
                  <tr>
                      <th scope="row"></th>
                      <td className="fw-bold" style={{width:"100px"}}>Touch Screen</td>
                      <td>{product.touchScreen}</td>
                  </tr>
                ):null}

                {product.camera? (
                  <tr>
                      <th scope="row"></th>
                      <td className="fw-bold" style={{width:"100px"}}>Camera</td>
                      <td>{product.camera}</td>
                  </tr>
                ):null}

                {product.displaySize? (
                  <tr>
                      <th scope="row"></th>
                      <td className="fw-bold" style={{width:"100px"}}>Display Size</td>
                      <td>{product.displaySize}</td>
                  </tr>
                ):null}

                {product.ram? (
                  <tr>
                      <th scope="row"></th>
                      <td className="fw-bold" style={{width:"100px"}}>Ram</td>
                      <td>{product.ram}</td>
                  </tr>
                ):null}

                {product.storageCapacity? (
                  <tr>
                      <th scope="row"></th>
                      <td className="fw-bold" style={{width:"100px"}}>Storage Capacity</td>
                      <td>{product.storageCapacity}</td>
                  </tr>
                ):null}

                {product.numberOfSIM? (
                  <tr>
                      <th scope="row"></th>
                      <td className="fw-bold" style={{width:"100px"}}>Number SIM</td>
                      <td>{product.numberOfSIM}</td>
                  </tr>
                ):null}

                {product.connectivityTechnology? (
                  <tr>
                      <th scope="row"></th>
                      <td className="fw-bold" style={{width:"100px"}}>Connectivity Technology</td>
                      <td>{product.connectivityTechnology}</td>
                  </tr>
                ):null}

                {product.resolution? (
                  <tr>
                      <th scope="row"></th>
                      <td className="fw-bold" style={{width:"100px"}}>Resolution</td>
                      <td>{product.resolution}</td>
                  </tr>
                ):null}

                {product.materialType? (
                  <tr>
                      <th scope="row"></th>
                      <td className="fw-bold" style={{width:"100px"}}>Material Type</td>
                      <td>{product.materialType}</td>
                  </tr>
                ):null}

                {product.necklaceType? (
                  <tr>
                      <th scope="row"></th>
                      <td className="fw-bold" style={{width:"100px"}}>Necklace Type</td>
                      <td>{product.necklaceType}</td>
                  </tr>
                ):null}

                {product.targetedGroup? (
                  <tr>
                      <th scope="row"></th>
                      <td className="fw-bold" style={{width:"100px"}}>Targeted Group</td>
                      <td>{product.targetedGroup}</td>
                  </tr>
                ):null}

            </tbody>

              </table>
            </div>
          </div>

          <div className="col-12">
            <h3 className="text-secondary fw-bold my-2">Description </h3>
            <p className="p-2">{product.description}</p>
          </div>

        </div>
      </div>
  )
}
const mapStateToProps=(state)=>{
  return{
    p:state
  }
}
export default connect(mapStateToProps,{getOneProduct,addProuductTocart})(ProductDetails);
