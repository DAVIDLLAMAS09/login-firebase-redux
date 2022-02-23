import { initialstate } from "./initialState";

export const AuthReducer = (state = initialstate.auth, action) =>{

    switch (action.type) {
        case "REGISTER_USER_START":
            return {
                ...state,
                loading:true
            }
        case "REGISTER_USER_SUCCESS":
            return {
                ...state,
                user:action.payload,
                loading:false,
                error:null
            }
        case "REGISTER_USER_FAILURE":
            return {
                ...state,
                loading:false,
                error:action.payload.message
            }
        case "LOGIN_USER_START":
            return {
                ...state,
                loading:true
            }
        case "LOGIN_USER_SUCCESS":
            return {
                ...state,
                loading:false,
                user:action.payload,
                error:null
            }
        case "LOGIN_USER_FAILURE":
            return {
                ...state,
                loading:false,
                error:action.payload
            }
        case "LOGOUT_USER":
            return {
                ...state,
                user:null,
                loading:false
            }
        // case "SET_USER":
        //     return{
        //         ...state,
        //         user:action.payload
        //     }
        default:
            return state
    }
}