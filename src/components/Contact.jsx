import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addContact } from '../redux/actions/ContactActions'

const Contact = ({addContact}) => {
    const [userInfo,setUserInfo] = useState({})
  

    const onChange=(e)=>{
       
        setUserInfo({
            ...userInfo,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        addContact(userInfo)
    }
  return (
      <>
    <div>Contact component{JSON.stringify(userInfo)}</div>
    <form onSubmit={handleSubmit}>
        <input name="nombre" type="text" placeholder='nombre' onChange={onChange}/>
        <input name="email" type="email" placeholder='email' onChange={(e)=>onChange(e)}/>
        <input name="edad" type="number" placeholder='edad' onChange={(e)=>onChange(e)}/>
        <button  type="submit">Enviar</button>
    </form>
    </>
  )
}

const mapDispatchToProps =( dispatch)=>{
    return{
        addContact:(valor)=>dispatch(addContact(valor))
    }
}

export default connect(null,mapDispatchToProps)(Contact)