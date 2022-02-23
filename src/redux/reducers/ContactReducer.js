import { initialstate } from "./initialState";

export const ContactReducer=(state=initialstate.contactList, action)=>{
    switch (action.type) {
        case "ADD_CONTACT":
            return{
                ...state,
                contact:[...state.contact,action.payload],
                length:state.contact.length + 1
            }
        default:
            return state
    }
}