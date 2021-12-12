import {connect} from "react-redux";
import {Route,Redirect} from "react-router-dom";
const ProtectedRoute = ({isUser,component:Component,...rest}) => {
  return(
    <Route {...rest} render ={
       (props)=>{
         if(isUser){
           return <Component {...props}/>
         }else{
           return <Redirect to={{
             pathname:"/sign-up",
             state:{from:props.location}
           }}/>
         }
       }
    }/>
  )
}

const mapStateToProps = (state)=>{
  return {
    isUser:state.currntUser
  }
}
export default connect(mapStateToProps)( ProtectedRoute);
