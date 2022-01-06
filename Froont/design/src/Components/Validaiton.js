import React from 'react'

export default function Validaiton( fullName,userName, email, password,password2) {

        let errors={};
        if(!fullName){
            errors.fullName="name is required"
        
        }
        if(!userName){
            errors.username="Username is required."
        }
        if(!email){
            errors.email="email is required"
        }
        else if(!/\S+@\S+\.\S+/.test(email)){
        errors.email="Email address is invalid "
        }
        if(!password){
            errors.password="Password is required."}
        else if(password.length<=6){
            errors.password="Password needs to be 6 charcters or more ."
        
        }
        if(!password2){
            errors.password="Password is required."}
        else if(password2 !=password){
            errors.password2="passwords do not match"
        }
        return  errors.fullName || errors.username || errors.email || errors.password ||errors.password2 ? errors: null;

    }
   
    

