import  React, { useState ,useEffect } from 'react'
import axios  from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
export default function InternalDesign() {
    const types = ["internal","external"]
    const [internal,setInternal] = useState([])
    const {design_type}=useParams();
    useEffect(() => {
        types.forEach(design_type => {
            axios.get(`http://localhost:8080/utility/col/${design_type}`)
        .then((response) => {
        
          console.log(response);
          console.log(response.data);
    
          if(design_type === 'internal'|| design_type === 'internal design'){
              setInternal(response.data)
          }
          
        })
        .catch((err)=>{ 
            console.log(err);
        })


        });
        


      }, []);
    return (
        <div>

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
                    {internal.map(ele=>(
                        <Link to={`/Utility/${ele.id}`} className="item">
                            <Link to={`/providerServies/${ele.user.id}`} className="user"><img src="./images/img3.jpg" alt="" /></Link>
                       
                          
                            <div className="head">
                             
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
        </div>
    )
}
