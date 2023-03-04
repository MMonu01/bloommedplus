import { useEffect } from "react"
import { loadData, saveData } from "../../Utils/accessLocalstorage"
import { AUTH_FAILURE, AUTH_REQUEST, AUTH_SUCCESS,SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS,LOGOUT_SUCCESS } from "./actionTypes"

const initialState ={
    isAuth:loadData("LoginStatus") || false,
    isLoading: false,
    token:loadData("token") || {},
    isError:false
}
// console.log(initialState,"iniitalssjsojs")
export const reducer = (state=initialState,{type,payload})=>{
 
    switch(type){
        case AUTH_REQUEST:{
            saveData("LoginStatus",false)
            saveData("token","")
            return {...state, isLoading:true,}
        }
        case AUTH_SUCCESS: {
            saveData("LoginStatus",true)
            saveData("token",payload)
            return {...state,isLoading:false,isAuth:true,token:payload}
        }
        case AUTH_FAILURE: { 
            saveData("LoginStatus",false)
            saveData("token","")
            return {...state,isLoading:false,isError:true}}
        

            case SIGNUP_REQUEST:{
                saveData("LoginStatus",false)
                saveData("token","")
                return {...state, isLoading:true,}
            }
            case SIGNUP_SUCCESS: {
                saveData("LoginStatus",true)
                saveData("token",payload)
                return {...state,isLoading:false,isAuth:true,token:payload}
            }
            case SIGNUP_FAILURE: { 
                saveData("LoginStatus",false)
                saveData("token","")
                return {...state,isLoading:false,isError:true}}
            case LOGOUT_SUCCESS: {
                saveData("LoginStatus",false)
                saveData("token","")
                return {...state,isAuth:false,token:""}
            }
        default:return state
    }
}