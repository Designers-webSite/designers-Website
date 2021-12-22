import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react'; 
export default function DesignerInfo() {
    const[designer,setDesigner]=useState([])
    useEffect(() => {
        axios.get("http://localhost:8080/designer").then((r) => {
         
          console.log(r);
          console.log(r.data);
    
          setDesigner(r.data);
          //console.log(r.data)
        });
      }, []);

      

    return (
        
           <div>
            {designer.map((ele)=>{
              return  (
                  <div>
              <h1>design Type :</h1> <br/>
              <p>{ele.designType}</p>
              <h1>Info :</h1><br/>
              <p>{ele.info}</p>
              <p></p>
              </div>

              )})}
            
           </div>
    )
}
