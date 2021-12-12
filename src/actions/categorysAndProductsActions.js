import firebase from "./../firebase";

export const getCategorys = () => {
    return async (dispatch)=>{
      await  firebase
              .database()
              .ref("Categorys")
              .on("value", (snapshot) => {
                const categorys = []
                  Object.keys(snapshot.val()).map(val => {
                      const objectVal = snapshot.val()[val];
                    return categorys.push(objectVal);
                  })
                  dispatch({
                    type: "GET_CATEGORYS",
                    payload: categorys,
                  });
              });
      }
}


export const addProduct = (formValue) => {
    return async (dispatch)=>{
      const product = {...formValue};
      await firebase.database().ref("Products/").push(product).then(()=>{
        dispatch({
          type: "ADD_PRODUCT",
          payload: "Product added successfully",
        });
      }).catch((error)=>{
        dispatch({
          type: "ADD_PRODUCT",
          payload: error.message,
        });
      });
    }
}


export const updateProduct = (formValue,id) => {
    return async (dispatch)=>{
      const product = {...formValue};
      await firebase.database().ref(`Products/${id}`).update(product).then(()=>{
        dispatch({
          type: "UPDATE-PRODUCT",
          payload: "Product Update Successfully",
        });
      }).catch(error=>{
        dispatch({
          type: "UPDATE-PRODUCT",
          payload: error.message,
        });
      });
    }
}


export const deleteProduct = (id) => {
    return async (dispatch)=>{
      await firebase.database().ref(`Products/${id}`).remove().then(()=>{
        dispatch({
          type: "REMOVE-PRODUCT",
          payload: "Product Delete Successfully",
        });
      }).catch(error=>{
        dispatch({
          type: "REMOVE-PRODUCT",
          payload: error.message,
        });
      });
    }
}

export const getProducts = ()=>{
  return async (dispatch)=>{
    await firebase
        .database()
        .ref("Products")
        .on("value", (snapshot) => {
          const products = snapshot.val();
          dispatch({
            type: "GET_PRODUCTS",
            payload: products,
          });
        });
  }
}

export const getOneProduct = (id) => {
        return async (dispatch)=>{
          await firebase.database().ref(`Products/${id}`).on("value",(snapshot)=>{
              console.log(snapshot.val())
              dispatch({
                type: "GET_PRODUCT_DY_ID",
                payload:snapshot.val(),
              });
            })
        }
  }
