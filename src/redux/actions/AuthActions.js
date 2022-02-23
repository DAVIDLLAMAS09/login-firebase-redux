import { createUserWithEmailAndPassword, 
         signInWithEmailAndPassword, 
         signInWithPopup, signOut  } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

import { auth, googleAuthProvider, dbFirebase } from '../../firebase'

//creadores de accciones

//register
const registerStart =()=>{
   return{
        type :'REGISTER_USER_START'
   }
}

const registerSuccess =(user)=>{
    return {
        type :'REGISTER_USER_SUCCESS',
        payload: user
    }
}

const registerFailure =(error)=>{
    return{
        type :'REGISTER_USER_FAILURE',
        payload:error
    }
}

const registerUserFirebase = async(user)=>{
    let objUser = {
        idUser:user.user.uid,
        email:user.user.email,
        modeSignIn:user.user.providerId,
        name:user.user.displayName,
        role:"usuario"
    }

     await setDoc(doc(dbFirebase, "usuarios", user.user.uid),objUser,{merge:true})
    
}

//login

const loginStart = ()=>{
    return { 
        type:"LOGIN_USER_START"
    }
}

const loginSuccess = (user)=>{
    return{
        type:"LOGIN_USER_SUCCESS",
        payload:user
    }
}

const loginFailure = (error)=>{
    return{
        type:"LOGIN_USER_FAILURE",
        payload:error
    }
}

//logout

const logoutSuccess = ()=>{
    return {
        type:"LOGOUT_USER"
    }
}

//persist user on app alternative
// export const setUser =(user)=>{
//     return{
//         type:"SET_USER",
//         payload:user
//     }
// }




// register, login and logout autentication actions can we used on components

// register user
export const registerNewUser = (email, password)=>{
    return dispatch =>{
       dispatch(registerStart())
       createUserWithEmailAndPassword(auth,email,password).then(user=>{
           dispatch(registerSuccess(user))
       })
       .catch(error=>{
        dispatch(registerFailure(error))
       })
    }
}


//login with email and password
export const loginUser = (email, password)=>{
    return dispatch =>{
        dispatch(loginStart())
        signInWithEmailAndPassword(auth,email,password)
        .then(user=>{
            registerUserFirebase(user)
            dispatch(loginSuccess(user))
        })
        .catch(error=>{
            dispatch(loginFailure(error))
        })
    }
}

//login with google
export const loginUserWithGoogle = ()=>{
    return dispatch =>{
        dispatch(loginStart())
        signInWithPopup(auth ,googleAuthProvider)
        .then(user=>{
            registerUserFirebase(user)
            dispatch(loginSuccess(user))
        })
        .catch(error =>{
            dispatch(loginFailure(error))
        })
    }
}

//logout
export const logoutCurrentUser = ()=>{
    return dispatch => {
        signOut(auth).then(()=>{
            dispatch(logoutSuccess())
        })
        .catch(error=>{
            console.log("error en logout: ", error)
        })
    }
}

