import { AUTH_FAILURE, AUTH_REQUEST, AUTH_SUCCESS } from "./actionTypes"


export const AuthRequestAction = ()=>{
    return {type:AUTH_REQUEST}
}

export const AuthSuccessAction = (payload)=>{
    return {type:AUTH_SUCCESS,payload}
}

export const AuthFailureAction = ()=>{
    return {type:AUTH_FAILURE}
}