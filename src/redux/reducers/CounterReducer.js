import { initialstate } from "./initialState";

//REDUCER COUNTER QUE EFECTUA EL CAMBIO DE ESTADO SEGUN EL TYPE Y EL PAYLOAD
export const CounterReducer = (state = initialstate.counter,action)=>{

    switch (action.type) {
        case "PLUS_COUNTER":{
            return{
                ...state,
                value:state.value + 1
              
            }
        }
        case "MINUS_COUNTER":{
            return{
                ...state,
                value:state.value - 1
            }
        }
        case "RESET_COUNTER":{
            return{
                ...state,
                value: 0
            }
        }
        default:
            return state;
    }
} 