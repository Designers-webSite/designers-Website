import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react'; 
import { removeUtility} from "../reducers/utility/action"
import { useDispatch } from 'react-redux';
import { useDispatch } from 'react-redux';


export default function UtilityInfo() {
    const[utility,setUtlity]=useState([])
    const dispatch=useDispatch()
    useEffect(() => {
        axios.get("http://localhost:8080/utility").then((r) => {
         
          console.log(r);
          console.log(r.data);
    
          setUtlity(r.data);
          //console.log(r.data)
        });
      }, []);

      
          
      function remove() {
        axios.delete("http://localhost:8080/utility");
       
        const action =removeUtility()
        dispatchEvent()
      }


    return (
        <div>
            {designer.map((ele)=>{
              return  (
                  <div className='item'>
                      <div className='user'>
                          {/* {profile} */}
              <p>{ele.title}</p>
              <h3>Detail</h3>
              <p>{ele.description}</p>
              <h3>Instruction</h3>
              <p>{ele.instructions}</p>
              
             </div>

              </div>

              )
           })}
        </div>
    )
}
