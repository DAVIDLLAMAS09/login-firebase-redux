import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


// private routes verified is exists currentUser on store
 const PrivateRoutes = ({children,currentUser}) => {
  return (
          currentUser ? children: <p>debes de loguearte para acceder a esta ruta <Link to="/login">iniciar sesion</Link></p> 
      
  )
}

const mapStateToProps = (state)=>{
    return{
        currentUser:state.AuthReducer.user
    }
}

export default connect(mapStateToProps,null)(PrivateRoutes)
