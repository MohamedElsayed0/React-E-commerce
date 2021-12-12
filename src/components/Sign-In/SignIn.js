import React from "react";
import {connect} from "react-redux";
import { Link, useHistory,useLocation } from "react-router-dom";
import { Formik, Form, ErrorMessage, Field } from "formik";
import Button from "@mui/material/Button";
import * as Yup from "yup";
import { logIn } from "./../../actions/index";


const SigninSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6).required("Required"),
});

const useQuery = () => {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
};

const Login = ({location,logIn}) => {

  let query = useQuery().get("prevPath");
  let history = useHistory();

  const onFormSubmit = (value) => {
    logIn(value.email,value.password,query,history)
  };
  return (
    <div>
      <div className="SignUp">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-5 col-12 ">
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                validationSchema={SigninSchema}
                onSubmit={onFormSubmit}
              >
                {({ values }) => (
                  <Form className="row p-5 justify-content-center border bg-white">
                    <div className="mb-3">
                      <h3 >Sign-In</h3>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" >Email</label>
                        <Field
                          className="fieldStyle"
                          type="email"
                          name="email"
                          autoComplete="off"
                          placeholder="Email"
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="text-danger fst-italic"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">Password</label>
                        <Field
                          className="fieldStyle"
                          type="password"
                          name="password"
                          placeholder="password"
                        />
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="text-danger fst-italic"
                        />
                    </div>

                    <div className="text-center">
                        <Button
                          type="submit"
                          variant="outlined"
                          className="bg-dark text-white mt-1"

                        >
                          Sign In
                        </Button>
                        <br/>
                        <Button
                          className="mt-3"
                          variant="outlined"
                          style={{background:"#9C27B0"}}
                        >
                          <Link className="nav-link p-0 text-white" to="/sign-up">
                            Sign Up
                          </Link>
                        </Button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null,{logIn})(Login);
