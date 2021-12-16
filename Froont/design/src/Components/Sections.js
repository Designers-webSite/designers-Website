import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BsStarFill, BsStar, BsStarHalf } from 'react-icons/bs'
import { Link } from 'react-router-dom'
const Sections = () => {
    const [content,setContent] = useState([])
    // const{} =useParams 
    // 

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
        <div className='content sections'>
            <div className="search-box">
                <input type="text" placeholder='Find Design Service . . .' />
                <button>Search</button>
            </div>
            <div className="section">
                <div className="header">
                    <h1 className="main-title">Interior Design services</h1>
                    <select name="" id="">
                        <option value="">Filter</option>
                    </select>
                </div>
                <div className="items">
                    {content.map(ele=>(
                        <Link to={`/service/${ele.id}`} className="item">
                            <Link to="/user/:id" className="user"><img src="./images/img3.jpg" alt="" /></Link>
                            <div className="head">
                                {/* Put image src here */}
                                <img src="./images/img4.jpg" alt="" />
                            </div>
                            <div className="footer">
                                <h3>{ele.title}</h3>
                            
                            </div>
                        </Link>
                    ))}
                    




                    
                </div>
            </div>
        </div>
    )
}

export default Sections
