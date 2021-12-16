import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

export default function DesignType() {
const[content,setContent]=useState([])

//internal design 
    useEffect(() => {
        axios.get("http://localhost:8080/designer/AllUtilities/internal")
        .then((response) => {
        
          console.log(response);
          console.log(response.data);
    
          setContent(response.data);
          //console.log(r.data)
        })
        .catch((err)=>{
            console.log(err);
        })
      }, []);


    return (
        <div>

            {content.map((el)=>{
                return(
                    <div>
                    <p>{el.title}</p>
                    </div>
                )


            })}
            
        </div>
    )
}
