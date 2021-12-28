import  React, { useState ,useEffect } from 'react'
import axios  from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function AllServies() {
   
const [allutility,setAllutility] = useState([])
    const {design_type}=useParams();    
    useEffect(() => {
       
         axios.get("http://localhost:8080/utility/all")
        .then((response) => {
        
          console.log(response);
          console.log(response.data);
    
          
            setAllutility(response.data)
          
        })
        .catch((err)=>{ 
            console.log(err);
        })


        }, []);
        









    return (
        <div className='content sections'>
            <div className="section">
                <div className="header">
                    <h1 className="main-title">All Servies</h1>
                    <select name="" id="">
                        <option value="">Filter</option>
                    </select>
                </div>
                <div className="items">
                    {allutility.map(ele=>(
                        <Link to={`/service/${ele.id}`} className="item">
                        <Link to={`/providerServies/${ele.user.id}`} className="user"><img src="./images/img3.jpg" alt="" /></Link>                            <div className="head">
                                {/* Put image src here */}
                                <img src={ele.picture} alt="" />
                            </div>
                            {/* <div className="footer"> */}
                                <h3>{ele.title}</h3>
                            
                            {/* </div> */}
                        </Link>
                    ))}
                </div>
            </div>
            
        </div>
    )
}
