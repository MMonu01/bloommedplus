import { loadData, saveData } from "../../Utils/accessLocalstorage"
import { AUTH_FAILURE, AUTH_REQUEST, AUTH_SUCCESS } from "./actionTypes"

const initialState ={
    isAuth:loadData("LoginStatus") || false,
    token:loadData("token") || "",
    isLoading:false,
    isError:false
}

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
        default:return state
    }
}