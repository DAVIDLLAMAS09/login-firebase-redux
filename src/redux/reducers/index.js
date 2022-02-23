import { combineReducers } from "redux";
import { CounterReducer } from "./CounterReducer";
import { ContactReducer } from "./ContactReducer";
import { AuthReducer } from "./AuthReducer";


//COMBINAMOS REDUCERS PARA PONERLOS EN UN MISMO OBJETO
 const rootReducer = combineReducers({
    CounterReducer,
    ContactReducer,
    AuthReducer
    
 })

 export default rootReducer