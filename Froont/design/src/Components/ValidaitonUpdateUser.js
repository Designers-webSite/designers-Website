import React from 'react'

export default function ValidaitonUpdateUser( fullName,userName, email ,picture) {

        let errors={};
        if(!fullName){
            errors.fullName="name is required"
        
        }
        if(!userName){
            errors.userName="Username is required."
        }
        if(!email){
            errors.email="email is required"
        }
        else if(!/\S+@\S+\.\S+/.test(email)){
        errors.email="Email address is invalid "
        }
        if(!picture){
            errors.password="picture is required."}
       
        return  errors.fullName || errors.userName || errors.email ? errors: null;
        

    }
   
    

