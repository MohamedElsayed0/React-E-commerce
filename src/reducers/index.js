import { combineReducers } from "redux";

export const loaddingReduser = (state = false, action) => {
  switch (action.type) {
    case "LODDING":
      return action.payload;
    default:
      return state;
  }
};

export const authReduser = (state = null, action) => {
  switch (action.type) {
    case "SUCSES":
      return action.payload;
    default:
      return state;
  }
};

export const authErrorReduser = (state = null, action) => {
  switch (action.type) {
    case "ERROR-MESSAGE":
      return action.payload;
    default:
      return state;
  }
};

const checkUserReducer = (currntUser = null, action) => {
  switch (action.type) {
    case "GET_USER":
      return action.payload;
    default:
      return currntUser;
  }
};

const drawerReducer = (state = false, action) => {
  if (action.type === "TOGGELE_DRAWER") {
    return action.payload;
  }
  return state;
};


const getProductsReducer = ( state = [], action ) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return action.payload
    default:
    return state;
  }
}

const getCategorysReducer = (state = [], action)=>{
    switch (action.type) {
      case "GET_CATEGORYS":
        return action.payload
      default:
        return state;
    }
}

const getProductByIdReducer = (state = null, action)=>{
    switch (action.type) {
      case "GET_PRODUCT_DY_ID":
        return action.payload
      default:
        return state;
    }
}

const updateProductReducer = (state = null, action)=>{
    switch (action.type) {
      case "UPDATE-PRODUCT":
        return action.payload
      default:
        return state;
    }
}

const addProductReducer = (state = false , action)=>{
    switch (action.type) {
      case "ADD_PRODUCT":
        return action.payload
      default:
        return state;
    }
}

const deleteProductReducer = (state = null, action)=>{
    switch (action.type) {
      case "REMOVE-PRODUCT":
        return action.payload
      default:
        return state;
    }
}

const getAllFromShoppingCartReducer = (state = null, action)=>{
    switch (action.type) {
      case "GET_ALL_FROM-SHOPPING_CART":
        return action.payload
      default:
        return state;
    }
}

const displayOederReducer = (state = null, action)=>{
    switch (action.type) {
      case "ONE_OREDER":
        return action.payload
      default:
        return state;
    }
}


export default combineReducers({
  load:loaddingReduser,
  authErrorReduser:authErrorReduser,
  addProductMessage:addProductReducer,
  auth: authReduser,
  drawerState: drawerReducer,
  currntUser: checkUserReducer,
  products:getProductsReducer,
  category:getCategorysReducer,
  productByID:getProductByIdReducer,
  updateProduct:updateProductReducer,
  deleteProduct:deleteProductReducer,
  shoppingCartItems:getAllFromShoppingCartReducer,
  oneOrder:displayOederReducer,
});
