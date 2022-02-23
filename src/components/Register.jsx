import React,{ useState,useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {connect}  from 'react-redux'
import { registerNewUser } from '../redux/actions/AuthActions'

const Register = ({registerNewUser,currentUser}) => {
  const [user,setUser] = useState({email:'',password:''})

  const handlesubmit=(e)=>{
   e.preventDefault();
   registerNewUser(user.email,user.password)
   }

 

   const handeChange = (e) =>{
       setUser({
           ...user,
           [e.target.name] : e.target.value
       })
   }

   let navigate = useNavigate();
   useEffect(()=>{
      currentUser && navigate("/");
   },[currentUser,navigate]);

 return (
   <div>
       <form onSubmit={handlesubmit}>
           <p><label htmlFor="email">email</label></p>
           <input type="email" name="email" id="email" onChange={handeChange}/>
           <p><label htmlFor="email">password</label></p>
           <input type="password" name="password" id="password" onChange={handeChange}/>
           <button type="submit">Sign Un</button>
       </form>
       <p>Have an account? <Link to="/login">Sign In</Link></p>
   </div>
 )
}

const mapStateToProps = (state)=>{
  console.log(state)
  const {user} = state.AuthReducer
 return{
  currentUser:user
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    registerNewUser: (email,pass)=> dispatch(registerNewUser(email,pass))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Register)