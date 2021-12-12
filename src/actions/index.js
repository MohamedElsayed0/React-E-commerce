
import {
  logIn,
  checkUser,
  onSignUpSubmit,
  onSignUpEdite,
  signOut} from "./authActions";
import {
  getCategorys,
  addProduct,
  updateProduct,
  deleteProduct,
  getProducts,
  getOneProduct} from "./categorysAndProductsActions";
import {getAllFromShoppingCart,
  addProuductTocart,
  removeProuductFromCart,
  removeItemFromCart,
  removeAllItemsFromCart,
  addOrder} from "./shoppingCartActions";
////////////////////////////////////////////////////
export {
  logIn,
  checkUser,
  onSignUpSubmit,
  onSignUpEdite,
  signOut,
  getCategorys,
  addProduct,
  updateProduct,
  deleteProduct,
  getProducts,
  getOneProduct,
  getAllFromShoppingCart,
  addProuductTocart,
  removeProuductFromCart,
  removeItemFromCart,
  removeAllItemsFromCart,
  addOrder
};
// signInWithEmailAndPassword(email, password)

export const protectRoute = () => {
  return{
    type:"ERROR-MESSAGE",
    payload:"You need to logged in First"
  }
};


///////////////////////////////////////////////////
export const toggeleDrawer = (drawerState) => {
  return {
    type: "TOGGELE_DRAWER",
    payload: drawerState,
  };
};
///////////////////////////////////////////////////








// export const getProductByID = (id)=>{
//   return async (dispatch)=>{
//     await firebase
//         .database()
//         .ref(`Products/${id}`)
//         .on("value", (snapshot) => {
//           const products = snapshot.val();
//           console.log(products);
//           const productAndID = [];
//           productAndID.push(products,id);
//           dispatch({
//             type: "GET_PRODUCT_DY_ID",
//             payload: productAndID,
//           });
//         });
//   }
// }
