import React, { useState, useEffect } from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { useLocation, Link } from "react-router-dom";
import Button from "@mui/material/Button";
import * as Yup from "yup";
import { connect } from "react-redux";
import { onSignUpSubmit, onSignUpEdite } from "../../actions";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required").min(6,"must be at least 6 characters"),
  confirmPassword: Yup.string()
     .oneOf([Yup.ref('password'), null], 'Passwords must match').required("Required"),
  country: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  area: Yup.string().required("Required"),
  phoneNumber: Yup.string().required("Required"),
});

const useQuery = () => {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
};

const SignUp = ({ onSignUpSubmit, history, user, onSignUpEdite,location }) => {
  const [prevPath, setPrevPath] = useState("");
  const [initValue, setInitValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    country: "",
    city: "",
    area: "",
    phoneNumber: "",
  });

  let query = useQuery().get("uid");

  useEffect(() => {
    if(location.state){
      setPrevPath(location.state.from.pathname);
    }
    if (query) {
      setInitValue(user);
    }
  }, [user, query,location]);

  const onFormSubmit = (value) => {
    if (query) {
      onSignUpEdite(value, query);
      history.replace('/user/adress');
    } else {
      onSignUpSubmit(value,history,location);
    }
  };
  return (
    <div className="SignUp">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-12 row justify-content-center">
            <Formik
              initialValues={initValue}
              enableReinitialize
              validationSchema={SignupSchema}
              onSubmit={onFormSubmit}
            >
              <Form className=" p-4 pb-3 col-12 row bg-white ">
                <div className="mb-3">
                  <h3 >Sign-Up</h3>
                </div>
                <div className="col-lg-6 col-12 mb-3">
                  <label htmlFor="firstName">First Name</label>
                  <Field
                    type="text"
                    name="firstName"
                    className="fieldStyle "
                    placeholder="First Name"
                    autoComplete="off"
                  />
                  <ErrorMessage
                    name="firstName"
                    component="span"
                    className="text-danger fst-italic"
                  />
                </div>

                <div className="col-lg-6 col-12 mb-3 ">
                <label htmlFor="lastName">Last Name</label>

                  <Field
                    type="text"
                    name="lastName"
                    className="fieldStyle "
                    placeholder="Last Name"
                    autoComplete="off"
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="text-danger fst-italic"
                  />
                </div>

                <div className="col-12 mb-3 ">
                  <label htmlFor="email">Email</label>

                  <Field
                    type="email"
                    name="email"
                    className="fieldStyle "
                    placeholder="Email"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-danger fst-italic"
                  />
                </div>

                <div className="col-lg-6 col-12 mb-3">
                  <label htmlFor="password">Password</label>
                  <Field
                    type="password"
                    name="password"
                    className="fieldStyle "
                    placeholder="Password"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-danger fst-italic"
                  />
                </div>
                <div className="col-lg-6 col-12 mb-3 ">
                <label htmlFor="confirmPassword">Confirm Password</label>

                  <Field
                    type="password"
                    name="confirmPassword"
                    className="fieldStyle "
                    placeholder="Confirm Password"
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="text-danger fst-italic"
                  />
                </div>

                <div className="col-lg-6 col-12 mb-3 ">
                <label htmlFor="country">Country</label>

                  <Field
                    type="text"
                    name="country"
                    className="fieldStyle "
                    placeholder="Country"
                  />
                  <ErrorMessage
                    name="country"
                    component="div"
                    className="text-danger fst-italic"
                  />
                </div>

                <div className="col-lg-6 col-12 mb-3 ">
                <label htmlFor="city">City</label>

                  <Field
                    type="text"
                    name="city"
                    className="fieldStyle "
                    placeholder="City"
                  />
                  <ErrorMessage
                    name="city"
                    component="div"
                    className="text-danger fst-italic"
                  />
                </div>

                <div className="col-12 mb-3 ">
                <label htmlFor="area">Area</label>

                  <Field
                    type="text"
                    name="area"
                    className="fieldStyle "
                    placeholder="Area & Street Name"
                  />
                  <ErrorMessage
                    name="area"
                    component="div"
                    className="text-danger fst-italic"
                  />
                </div>

                <div className="col-12 mb-3 ">
                <label htmlFor="phoneNumber">Phone Number</label>

                  <Field
                    type="number"
                    name="phoneNumber"
                    className="fieldStyle "
                    placeholder="Phone Number"
                  />
                  <ErrorMessage
                    name="phoneNumber"
                    component="div"
                    className="text-danger fst-italic"
                  />
                </div>

                <div className="col-12 mb-3 ">

                  <Button
                    variant="outlined"
                    type="submit"
                    color="primary"
                    className="w-100 text-white bg-dark"

                  >
                    Submit
                  </Button>
                </div>
                {
                  !query?(
                    <div className="col-12 mb-3 ">
                      <h6>Already have an account? <Link className="ml-2" to={`/logIn?prevPath=${prevPath}`}>Sign In</Link></h6>
                    </div>
                  ):null
                }
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.currntUser,
  };
};
export default connect(mapStateToProps, { onSignUpSubmit, onSignUpEdite })(
  SignUp
);
