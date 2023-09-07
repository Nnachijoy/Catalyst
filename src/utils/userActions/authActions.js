

import axios from "axios"
import { toast } from "react-toastify"
import { BaseURL } from "../../config/variables"



export const activateUserAccountAction = async ( payload ) => {
    try {

        const response = await axios.post( `${BaseURL}user/activate-account`, payload,

        {headers: {  'Accept': 'application/json', 'Content-Type': 'application/json', }}, 
        )
        
        const { data } = (response)

        return data
     
    } catch (error ) {

        if(error.response?.data?.message){
            return toast.error(error.response?.data?.message) 
        } else {
            return toast.error(error.message) 
        }
        
    } 

}


export const changeUserPassword = async ( token, password ) => {
    try {

        const response = await axios.patch( `${BaseURL}user/reset-password`, {password},

        {headers: {  
            'Accept': 'application/json', 'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}` 
        }}, 
        )
        
        const { data } = (response)

        return data
     
    } catch (error ) {

        if(error.response?.data?.message){
            return toast.error(error.response?.data?.message) 
        } else {
            return toast.error(error.message) 
        }
        
    } 

}


export const userLogin = async ( email, password ) => {
    try {

        const response = await axios.post( `${BaseURL}user/login`, {email, password},

        {headers: {  
            'Accept': 'application/json', 'Content-Type': 'application/json',
        }}, 
        )
        
        const { data } = (response)

        return data
     
    } catch (error ) {

        if(error.response?.data?.message){
            return toast.error(error.response?.data?.message) 
        } else {
            return toast.error(error.message) 
        }
        
    } 

}


export const resetUserPassword = async ( email ) => {
    try {

        const response = await axios.post( `${BaseURL}user/forgot-password`, { email },

        {headers: {  
            'Accept': 'application/json', 'Content-Type': 'application/json',
        }}, 
        )
        
        const { data } = (response)

        return data
     
    } catch (error ) {

        if(error.response?.data?.message){
            return toast.error(error.response?.data?.message) 
        } else {
            return toast.error(error.message) 
        }
        
    } 

}