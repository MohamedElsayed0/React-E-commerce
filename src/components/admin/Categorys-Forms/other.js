import React,{useState,useEffect} from "react"
import { Formik, Form, ErrorMessage, Field } from "formik";
import Button from "@mui/material/Button";
import * as Yup from "yup";
import { connect } from "react-redux";
import {useLocation} from "react-router-dom";

import {getOneProduct, addProduct, updateProduct } from "../../../actions";

import CardView from "./cardView";

const SignupSchema = Yup.object().shape({
  category: Yup.string().required("Required"),
  title: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  Brand: Yup.string().required("Required"),
  price: Yup.string().required("Required"),
  imgUrl1: Yup.string().required("Required").url(),
});


const useQuery = () => {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}
const Other = ({ addProduct, updateProduct, productByID, getOneProduct,history }) => {
  const [initView,setInitView] = useState({
    imgUrl1:"",
    Brand:"",
    title:"",
    price:0,
    discountPercentage:""
  })
  const [initValue,setInitValue] = useState({
    category: "",
    title: "",
    description: "",
    Brand: "",
    price: "",
    color: "",
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
       setInitView(productByID)
    }
  },[productByID,query])

  const onFormSubmit = (val)=>{
    if(query){
      updateProduct(val,query);
      history.push("/manageProuduct")
    }else{
      addProduct(val)
      // history.push("/manageProuduct")
    }
  }
  return (
    <div className="Other">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5 col-12 ">
            <Formik
              initialValues={initValue}
              enableReinitialize
              validationSchema={SignupSchema}
              onSubmit={onFormSubmit}
            >
              <Form className="row pt-2">
                <div className="mt-3">
                      <label htmlFor="category" >Category</label>
                      <Field as="select" name="category" className="fieldStyle">
                        <option value="" label="Select Category" />
                        <option value="Shoes-Racks">Shoes-Racks</option>
                        <option value="Cleaning">Cleaning</option>
                        <option value="Bean-Bags">Bean-Bags</option>
                        <option value="Storage">Storage</option>
                        <option value="Sunglasses">Sunglasses</option>
                        <option value="BackPacks">BackPacks</option>
                        <option value="Hair-Trimmer">Hair-Trimmer</option>
                        <option value="Beauty-Tools">Beauty-Tools</option>
                        <option value="Deodorants">Deodorants</option>
                        <option value="Beverages">Beverages</option>
                        <option value="Food">Food</option>
                      </Field>
                      <ErrorMessage
                        name="category"
                        component="span"
                        className="text-danger fst-italic"
                      />
                </div>

                <div className="mt-3">
                      <label htmlFor="title" >Title</label>
                      <Field
                        type="text"
                        name="title"
                        className="fieldStyle"
                        placeholder="title"
                        autoComplete="off"
                        onInput={(e)=>{
                        setInitView({
                          ...initView,
                          title:e.target.value,
                        });
                      }}
                      />
                      <ErrorMessage
                        name="title"
                        component="div"
                        className="text-danger fst-italic"
                      />
                </div>

                <div className="mt-3">
                      <label htmlFor="description" >Description</label>
                      <Field
                        type="text"
                        name="description"
                        className="fieldStyle"
                        placeholder="Description"
                        autoComplete="off"

                      />
                      <ErrorMessage
                        name="description"
                        component="div"
                        className="text-danger fst-italic"

                      />
                </div>

                <div className="mt-3">
                    <label htmlFor="Brand" >Brand</label>
                    <Field
                      type="text"
                      name="Brand"
                      className="fieldStyle"
                      placeholder="Brand"
                      autoComplete="off"
                      onInput={(e)=>{
                      setInitView({...initView, Brand:e.target.value});
                    }}
                    />
                    <ErrorMessage
                      name="Brand"
                      component="div"
                      className="text-danger fst-italic"

                    />
                </div>

                <div className="mt-3">
                      <label htmlFor="color" >Color</label>
                      <Field
                        type="text"
                        name="color"
                        className="fieldStyle"
                        placeholder="color"
                        autoComplete="off"
                      />
                </div>

                <div className="mt-3">
                    <label htmlFor="price" >Price</label>
                    <Field
                      type="number"
                      name="price"
                      className="fieldStyle"
                      placeholder="Price"
                      autoComplete="off"
                      onInput={(e)=>{
                      setInitView({...initView, price:e.target.value});
                    }}
                    />
                    <ErrorMessage
                      name="price"
                      component="div"
                      className="text-danger fst-italic"

                    />
                </div>

                <div className="mt-3">
                    <label htmlFor="discountPercentage" >Discount Percentage</label>
                    <Field
                      type="number"
                      name="discountPercentage"
                      className="fieldStyle"
                      placeholder="Discount Percentage"
                      autoComplete="off"
                      onInput={(e)=>{
                      setInitView({...initView, discountPercentage:e.target.value});
                    }}
                    />
                </div>

                <div className="mt-3">
                    <label htmlFor="imgUrl1" >Image 1</label>
                    <Field
                      type="text"
                      name="imgUrl1"
                      className="fieldStyle"
                      placeholder="Image-Url1"
                      autoComplete="off"
                      onInput={(e)=>{
                      setInitView({...initView, imgUrl1:e.target.value});
                    }}
                    />
                    <ErrorMessage
                      name="imgUrl1"
                      component="div"
                      className="text-danger fst-italic"
                    />
                </div>

                <div className="mt-3">
                    <label htmlFor="imgUrl2" >Image 2</label>
                    <Field
                      type="text"
                      name="imgUrl2"
                      className="fieldStyle"
                      placeholder="Image-Url2"
                      autoComplete="off"

                    />
                </div>

                <div className="mt-3">
                    <label htmlFor="imgUrl3" >Image 3</label>
                    <Field
                      type="text"
                      name="imgUrl3"
                      className="fieldStyle"
                      placeholder="Image-Url3"
                      autoComplete="off"
                    />
                </div>

                <div className="mt-3">
                  <label htmlFor="imgUrl4" >Image 4</label>
                    <Field
                      type="text"
                      name="imgUrl4"
                      className="fieldStyle"
                      placeholder="Image-Url4"
                      autoComplete="off"

                    />
                </div>

                {query ? (
                    <Button type="submit" className="mt-3" color="primary">
                      save
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
export default connect(mapStateToProps,{getOneProduct,addProduct,updateProduct}) (Other);
