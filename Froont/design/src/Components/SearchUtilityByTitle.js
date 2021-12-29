import React from 'react'
import { useParams } from 'react-router-dom';
import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';




 function SearchUtilityByTitle() {
    const [searchByTitle, setSearchByTitle] = useState([]);
    const{title}=useParams()
    console.log(title);

console.log(searchByTitle);
    
  

        useEffect(()=>{
          axios
          .get(`http://localhost:8080/utility/search/${title}`)
          .then((res) => {
           
            setSearchByTitle(res.data);
            console.log(res.data);
            
          })
          .catch((err) => {
            console.log(err);

          });
        },[])

    
      
    return (
    
      <div className='content sections'>
         <div className="items">
          {searchByTitle.map(ele=>(
            <Link to={`/service/${ele.id}`} className="item">
            <Link to="/profileUser" className="user"><img src="./images/img3.jpg" alt="" /></Link>
            <div className="head">
                {/* Put image src here */}
                <img src="./images/img4.jpg" alt="" />
            </div>
            
                <h3>{ele.title}</h3>
            
        </Link> 
           ) )}
                </div>
                </div>
                
    
    )
}
export default SearchUtilityByTitle