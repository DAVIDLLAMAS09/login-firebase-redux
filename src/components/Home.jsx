import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutCurrentUser } from '../redux/actions/AuthActions'
import {Button,Grid,Switch} from "@mui/material"
import { styled } from '@mui/system'

const MyButton = styled(Button)(props=>`
    background:${props.fondo};
`)

const Home = ({logoutUser,currentUser,emailUser}) => {
const [state,setState]= useState(false)

  const handleChange = (e)=>{
    console.log(e.target)
    setState(e.target.checked)
  }

  let navigate = useNavigate()
  const handleLogout=()=>{
      logoutUser();
      navigate("/")
  }
  return (
    <div style={{maxWidth:1350,background:'#FFF',margin:'0 auto'}}>
      <Grid container 
            direction="row"
            justifyContent="center"
            alignItems="center" 
            spacing={1}>
        <Grid item xs={12} md={12} >
           <p>Welcome...{ emailUser}</p>
           <p>
            {
              currentUser ? <Button className='btn-home' variant="outlined" onClick={handleLogout}>Logout</Button > : <MyButton fondo="#fff" variant="outlined"><Link to={"/login"}>iniciar sesion</Link> </MyButton>
            }
           </p>
           <Switch
              checked={state}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'controlled' }}
            />
        </Grid>
      </Grid>
    </div>

  )
}

const mapDispatchToProps = (dispatch)=>{
  return{
    logoutUser:()=>dispatch(logoutCurrentUser())
  }
}

const mapStateToProps = (state)=>{
  return{
    currentUser:state?.AuthReducer?.user || false,
    emailUser:state?.AuthReducer?.user?.user?.email || ""
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)