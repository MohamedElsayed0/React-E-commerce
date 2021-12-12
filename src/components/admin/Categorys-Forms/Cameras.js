import React,{useState,useEffect} from "react"
import { Formik, Form, ErrorMessage } from "formik";
import Button from "@mui/material/Button";
import * as Yup from "yup";
import { connect } from "react-redux";
import {useLocation} from "react-router-dom";
import OneInput from "./oneInput";
import CardView from "./cardView";
import {getOneProduct, addProduct, updateProduct } from "../../../actions";

const SignupSchema = Yup.object().shape({
  category: Yup.string().required("Required"),
  title: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  Brand: Yup.string().required("Required"),
  color: Yup.string().required("Required"),
  price: Yup.string().required("Required"),
  imgUrl1: Yup.string().required("Required"),
});


const useQuery = () => {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}
const Camera = ({ addProduct, updateProduct, productByID, getOneProduct,history }) => {
  const [initView,setInitView] = useState({
    imgUrl1:"",
    Brand:"",
    title:"",
    price:0,
    discountPercentage:""
  })
  const [initValue,setInitValue] = useState({
    category: "Camera",
    title: "",
    description: "",
    Brand: "",
    price: "",
    color: "",
    manufacturerNumber: "",
    touchScreen: "",
    displayType: "",
    digitalCameraType: "",
    opticalZoom: "",
    formFactor: "",
    discountPercentage:"",
    imgUrl1: "",
    imgUrl2: "",
    imgUrl3: "",
    imgUrl4: "",
  })

  let query = useQuery().get("pid");

  useEffect(()=>{getOneProduct(query)},[query,getOneProduct])
  useEffect(()=>{

    if (query && productByID){
       setInitValue(productByID);
       setInitView(productByID);
    }
  },[productByID,query])

  const onFormSubmit = (val)=>{
    if(query){
      updateProduct(val,query);
      history.push("/manageProuduct")
    }else{
      addProduct(val)
      history.push("/manageProuduct")
    }
  }
  return (
    <div className="Camera">
      <div className="container">
        <div className="row ">
          <div className="col-md-5 col-12 ">
            <Formik
              initialValues={initValue}
              enableReinitialize
              validationSchema={SignupSchema}
              onSubmit={onFormSubmit}
            >
              <Form className="row pt-5">

                    {Object.entries(initValue).map(([key,value],i)=>(
                      <div className="mt-3" key={i}>
                        <label htmlFor={key}>{key}</label>

                        <OneInput
                          className="fieldStyle"
                          placeholder={key}
                          name={key}
                          autoComplete="off"
                          onInput={(e)=>{
                          setInitView({
                            ...initView,
                            [e.target.name]:e.target.value,
                          });
                        }}/>

                        <ErrorMessage
                          name={key}
                          component="div"
                          className="text-danger fst-italic"
                        />

                      </div>
                    ))}
                    {query?(
                        <Button type="submit" className="mt-3" color="primary">
                          Save
                        </Button>
                      ):(
                        <Button type="submit" className="mt-3" color="primary">
                          Add
                        </Button>
                      )}
              </Form>
            </Formik>
          </div>
          <div className="col-md-4 col-sm-6 col-9 mt-3">
            <CardView val={initView}/>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state)=>{

    return{productByID:state.productByID}

}
export default connect(mapStateToProps,{getOneProduct,addProduct,updateProduct}) (Camera);
