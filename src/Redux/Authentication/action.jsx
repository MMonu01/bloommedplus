import { AUTH_FAILURE, AUTH_REQUEST, AUTH_SUCCESS, SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS,LOGOUT_SUCCESS } from "./actionTypes"


export const AuthRequestAction = ()=>{
    return {type:AUTH_REQUEST}
}

export const AuthSuccessAction = (payload)=>{
    return {type:AUTH_SUCCESS,payload}
}

export const AuthFailureAction = ()=>{
    return {type:AUTH_FAILURE}
}

export const SignupRequestAction = ()=>{
    return {type:SIGNUP_REQUEST}
}

export const SignupSuccessAction = (payload)=>{
    console.log("This is SignupSuccessAction")
    return {type:SIGNUP_SUCCESS,payload}
}

export const SignupFailureAction = ()=>{
    return {type:SIGNUP_FAILURE}
}

export const LogoutSuccessAction = ()=>{
    return {type:LOGOUT_SUCCESS}
}