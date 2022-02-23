import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser, loginUserWithGoogle } from '../redux/actions/AuthActions';

const Login = ({loginNewUser,currentUser, loginWithGoogle}) => {
    const [user,setUser] = useState({email:'',password:''})

    let navigate = useNavigate();
    useEffect(()=>{
        currentUser  && navigate("/")
    },[currentUser,navigate])
   const handlesubmit=(e)=>{
    e.preventDefault();
    loginNewUser(user.email, user.password)
    }

    const handleGoogle = ()=>{
        loginWithGoogle()
    }

    const handleFacebook =()=>{

    }

    const handeChange = (e) =>{
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

  return (
    <div>
        <form onSubmit={handlesubmit}>
            <button onClick={handleGoogle}>sign with google</button>
            <button onClick={handleFacebook}>sign with facebook</button>
            <p><label htmlFor="email">email</label></p>
            <input type="email" name="email" id="email" onChange={handeChange}/>
            <p><label htmlFor="email">password</label></p>
            <input type="password" name="password" id="password" onChange={handeChange}/>
            <button type="submit">Sign In</button>
        </form>
        <p>you dont have any account? <Link to="/register">Register Now</Link></p>
    </div>
  )
}
const mapStateToProps = (state)=>{

    const {AuthReducer}=state
    return{
        currentUser:AuthReducer.user
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        loginNewUser: (email,password)=> dispatch(loginUser(email,password)),
        loginWithGoogle:()=>dispatch(loginUserWithGoogle())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login)