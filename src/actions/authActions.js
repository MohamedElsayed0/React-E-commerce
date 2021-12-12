import firebase from "./../firebase";

export const logIn = (email, password,query,history) => {

  return async (dispatch) => {
    await firebase.auth().signInWithEmailAndPassword(email, password).then(()=>{
            dispatch({
              type: "SUCSES",
              payload: "You have logged in successfully",
            });
            if(query){
              history.replace(`${query}`)
            }else {
              history.replace(`/`)
            }
    }).catch(error=>{
      console.log(error.message)
      dispatch({
        type: "ERROR-MESSAGE",
        payload: "invalid email or password",
      });
    });

  };
};

export const checkUser = () => {
  return async (dispatch) => {
    dispatch({
      type:"LODDING",
      payload:true
    })
    await firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch({
          type:"LODDING",
          payload:false
        })
        const currntuser = user.multiFactor.user;
        firebase
          .database()
          .ref("Users/" + currntuser.uid)
          .on("value", (snapshot) => {
            dispatch({
              type: "GET_USER",
              payload: snapshot.val(),
            });
          });
      } else {
        dispatch({
          type: "GET_USER",
          payload: null,
        });
      }
    });
  };
};


export const onSignUpSubmit = (formValue,history,location) => {
  return async (dispatch) => {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(formValue.email, formValue.password)
      .then((response) => {
        const currntuser = response.user.multiFactor.user;
        const usersRef = firebase.database().ref("Users/" + currntuser.uid);
        const userProp = {
          displayName: formValue.firstName + " " + formValue.lastName,
          firstName:formValue.firstName,
          lastName:formValue.lastName,
          email: formValue.email,
          password:formValue.password,
          confirmPassword:formValue.confirmPassword,
          country:formValue.country,
          city:formValue.city,
          area:formValue.area,
          phoneNumber:formValue.phoneNumber,
          emailVerified: false,
          isAdmin: false,
          uid: currntuser.uid,
        };
        usersRef.set(userProp);
        dispatch({
          type: "SUCSES",
          payload: "You have logged in successfully",
        });
      }).then(()=>{
        let prvPath = location.state;
          if(prvPath){
            history.replace(`${prvPath.from.pathname}`)
          }else {
            history.replace(`/`)
          }
      }).catch((error) => {
        dispatch({
          type: "ERROR-MESSAGE",
          payload: error.message,
        });
      });
  };
};

export const onSignUpEdite = (formValue, uid) => {
  return async (dispatch) => {
    await firebase.database().ref("Users/" + uid).update(formValue).then((response) => {
        dispatch({
          type: "SUCSES",
          payload: "The address has been updated successfully",
        });
      })
      .catch((error) => {
        dispatch({
          type: "ERROR-MESSAGE",
          payload: error.message,
        });
      });
  };
};
export const signOut = () => {
    return async (dispatch) => {
      await firebase.auth().signOut();
      dispatch({
        type: "SUCSES",
        payload: "You have successfully logged out",
      });
    }
};
