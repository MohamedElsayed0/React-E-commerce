import "./App.css";
import React from "react";

import { BrowserRouter, Route, Switch} from "react-router-dom";
import AutoComplete from "./components/autoComplete/AutoComplet";

import SnakeComponent from "./snake";
import ProtectedRout from "./ProtectedRout";
import NavBar from "./components/navBar/navBar";
import Login from "./components/Sign-In/SignIn";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import ProductDetails from "./components/Products/productDetails";

import SignUp from "./components/sign-up/SignUp";
import ShoppingCart from "./components/shopping-cart/ShoppingCart";
import OneCategory from "./components/oneCategoryOfProduacts/OneCategory";
import User from "./components/user/User";
import AddProuduct from "./components/admin/addProduct";
import ManageProuduct from "./components/admin/manageProduct";
import Camera from "./components/admin/Categorys-Forms/Cameras";
import Headphones from "./components/admin/Categorys-Forms/Headphones";
import HomeDecor from "./components/admin/Categorys-Forms/HomeDecor";
import Jewelry from "./components/admin/Categorys-Forms/Jewelry";
import Laptop from "./components/admin/Categorys-Forms/Laptop";
import TVs from "./components/admin/Categorys-Forms/TVs";
import Mobile from "./components/admin/Categorys-Forms/Mobile";
import Watches from "./components/admin/Categorys-Forms/Watches";
import Other from "./components/admin/Categorys-Forms/other";

import CheckOut from "./components/checkOut/CheckOut";
import ThankYou from "./components/thankYou/thankYou";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { TransitionGroup , CSSTransition } from 'react-transition-group'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <SnakeComponent/>
        <NavBar />
        <div className="container-fluid app">
          <div className="row justify-content-center d-flex d-sm-none">
            <div className="col-10 p-2 rounded" style={{background:"#082032"}}>
                  <AutoComplete />
            </div>
          </div>
        </div>

        <main className="main container-fluid pt-2 ">
          <Route render={({location})=>(
            <TransitionGroup>
                <CSSTransition
                    in={location.pathname !== null}
                    timeout={400}
                    classNames="page"
                    unmountOnExit
                    key={location.key}
                  >
                    <Switch>
                      <Route path="/" exact component={Home} />

                      <Route path="/logIn" component={Login} />

                      <Route path="/sign-up" component={SignUp} />

                      <ProtectedRout path="/CheckOut" component={CheckOut} />

                      <Route path="/thankYou" component={ThankYou} />

                      <Route path="/shopping-cart" component={ShoppingCart} />

                      <Route path="/oneCategory/:name" component={OneCategory} />

                      <Route path="/Products" component={Products} />
                      <Route path="/ProductDetails/:id" component={ProductDetails} />

                      <Route path="/addProudct" exact component={AddProuduct} />

                      <Route path="/manageProuduct" component={ManageProuduct} />

                      <Route path="/addProudct/camera" component={Camera} />
                      <Route path="/addProudct/camera/:uid" component={Camera} />

                      <Route path="/addProudct/Head-phones" component={Headphones} />
                      <Route path="/addProudct/Head-phones/:id" component={Headphones} />

                      <Route path="/addProudct/Home-Decor" component={HomeDecor} />
                      <Route path="/addProudct/Home-Decor/:id" component={HomeDecor} />

                      <Route path="/addProudct/Jewelry" component={Jewelry} />
                      <Route path="/addProudct/Jewelry/:id" component={Jewelry} />

                      <Route path="/addProudct/Laptop" component={Laptop} />
                      <Route path="/addProudct/Laptop/:id" component={Laptop} />

                      <Route path="/addProudct/TVs" component={TVs} />
                      <Route path="/addProudct/TVs/:id" component={TVs} />

                      <Route path="/addProudct/Mobile" component={Mobile} />
                      <Route path="/addProudct/Mobile/:id" component={Mobile} />

                      <Route path="/addProudct/Watches" component={Watches} />
                      <Route path="/addProudct/Watches/:id" component={Watches} />

                      <Route path="/addProudct/Other" component={Other} />
                      <Route path="/addProudct/Other/:id" component={Other} />

                      <ProtectedRout path="/user" component={User} />
                    </Switch>

                </CSSTransition>
          </TransitionGroup>
          )}/>
        </main>
        <footer className="footer text-white text-center p-1" style={{background:"#082032"}}>
            <div className="social w-100 font-italic fw-bold ">
                  Made By <span className="text-danger"><FavoriteIcon/></span>
            </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}


export default App;
