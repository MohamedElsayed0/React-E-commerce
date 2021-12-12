import firebase from "./../firebase";
import moment from 'moment';

/////////////////////////////////////////////////
const creatShoppingCart = async ()=> {
 return await firebase.database().ref('/shopping-cart').push({
    Date: moment().format('MMMM Do YYYY, h:mm:ss a'),
  })
}

 const getOrCreatId = async() => {
    let cardId = localStorage.getItem('cartId');
    if (cardId) return cardId;

    let result = await creatShoppingCart();
    localStorage.setItem('cartId', result.key);
    console.log(result.key)
    return result.key
 }

 // const getItem = (cardID: string, productId: string) => {
 //   return firebase.database().ref('/shopping-cart/' + cardID + '/item/' + productId)
 // }

export const getAllFromShoppingCart = (product)=>{
  return async (dispatch) => {
    let cardID = await getOrCreatId();
     if (cardID ) {
      firebase.database().ref('shopping-cart/' + cardID + '/item').on("value",(snapshot)=>{
        dispatch ({
          type: "GET_ALL_FROM-SHOPPING_CART",
          payload: snapshot.val(),
        });
      })
     }
  }
}

export const addProuductTocart = (productId,product)=>{
  return async (dispatch) => {
    let cardID = await getOrCreatId();
    const isExeste = firebase.database().ref('shopping-cart/' + cardID + '/item/' + productId);
    if(isExeste){
      isExeste.once('value').then(snapshot => {
        if(snapshot.exists()){
          return isExeste.update({
                    quantatiy:snapshot.val().quantatiy + 1
                })
        }
        firebase.database().ref('shopping-cart/' + cardID + '/item/' + productId).set({
          product: product,
          quantatiy: 1,
        })
      })}
  }
}

export const removeProuductFromCart = (productId,product)=>{
  return async (dispatch) => {
    let cardID = await getOrCreatId();
    const isExeste = firebase.database().ref('shopping-cart/' + cardID + '/item/' + productId);
    if(isExeste){
      isExeste.once('value').then(snapshot => {
        if(snapshot.exists()){
          if(snapshot.val().quantatiy > 1){
            return isExeste.update({
                quantatiy:snapshot.val().quantatiy - 1
              })
          }
        }
      })}
  }
}

export const removeItemFromCart = (productId)=>{
  return async (dispatch) => {
    let cardID = await getOrCreatId();
      await firebase.database().ref('shopping-cart/' + cardID + '/item/' + productId).remove();
  }
}

export const removeAllItemsFromCart = (productId)=>{
  return async (dispatch) => {
    let cardID = await getOrCreatId();
      await firebase.database().ref('shopping-cart/' + cardID + '/item').remove();
  }
}
// "value", "child_added", "child_removed", "child_changed", or "child_moved".
export const addOrder = (userId,order)=>{
  return async (dispatch) => {
      await firebase.database().ref('Users/' + userId + '/Orders').push({
        items:order,
        orderDate: new Date().toLocaleDateString(),
        orderTime: new Date().toLocaleTimeString()
      }).then((res)=>{
        res.on("value",(snapshot)=>{
          dispatch({
            type:"ONE_OREDER",
            payload:snapshot
          })
        })
      });
  }
}
