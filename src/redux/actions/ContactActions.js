const aaC=(value)=>{
    return{
        type:"ADD_CONTACT",
        payload:value
    }
}

export const addContact =(value)=>{
    return dispatch =>{
        dispatch(aaC(value))
    }
}