// import firebase from "./firebase";
// import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { logInWithGoogle, signOut } from "./actions/index";

const Auth = (props) => {
  //   firebase.auth().onAuthStateChanged((user) => {
  //     if (user) props.logInWithGoogle();
  //     else props.signOut();
  //   });
  // }, []);

  const signOut = () => {
    props.signOut();
  };
  const signIn = () => {
    props.logInWithGoogle();
  };

  const renderAuth = () => {
    if (props.user) return <button onClick={signOut}>signOut</button>;
    else return <button onClick={signIn}>signIn</button>;
  };
  return <div>{renderAuth()}</div>;
};
const mapStateToProps = (state) => {
  return { user: state.currntUser };
};
export default connect(mapStateToProps, {
  signOut,
  logInWithGoogle,
})(Auth);
