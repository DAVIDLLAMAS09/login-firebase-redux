//LAS ACCIONES REGRESAN EL TYPE O PAYLOAD Y SE MANDA AL REDUCER
export const addCounter = ()=>{
    return{
        type:"PLUS_COUNTER"
    }
}

export const minusCounter = ()=>{
    return{
        type:"MINUS_COUNTER"
    }
}

export const resCounter = () =>{
    return{
        type:"RESET_COUNTER"
    }
}