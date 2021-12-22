import React, { useState } from 'react'
import { addDesigner } from "../reducers/designer/action"
import { useDispatch } from 'react-redux';
import axios from 'axios';
function CreateDesigner() {
    

    const dispatch = useDispatch();
    const [fullName, setFullName] = useState("")
    const [userName, setUserName] = useState("")
    const [designType, setDesignType] = useState("")
    // const [availabilty, setAvailabilty] = useState("")
// const [searshUserName,setSearchUserName]=useState()
    // useEffect(() => {
    //     axios.get("http://localhost:8080/designer").then((response) => {
        
    //       console.log(response);
    //       console.log(response.data);
    
    //       setSpecialties(r.data);
    //       //console.log(r.data)
    //     });
    //   }, []);


    const handelChangefullName=(e)=>{
        setFullName(e.target.value)


    }
    const handelChangeUserName=(e)=>{
        setUserName(e.target.value)
        
    }
    const handelChangeDesignType=(e)=>{
        setDesignType(e.target.value)  
    }

    function add() {
        // let fullName = document.querySelector("#fname").value;
        // let userName = document.querySelector("#userName").value;
        // let designType = document.querySelector("#type").value;



        const data={
            fullName,
            userName,
            designType,
            
            
        }

        axios
            .post("http://localhost:8080/designer", data)
            .then((res) => {
                const action = addDesigner(res.data)
                dispatch(action)

            })
            .catch((err) => {

                console.log(err);
            });

    };

    

    return (
        <div className='createDesigner'>

            <label > fullName:</label>
            <br />
            <input type="text" id="fname" name="name" onChange={handelChangefullName} />
            <br />
            <label >userName:</label>
            <br />
            <input type="text" id="userName" name="lname"onChange={handelChangeUserName}/>
            <br />
            <lable>choose design type</lable>

            <input type="text" id="type" onChange={handelChangeDesignType}/>



            {/*       <label>Internal design</label><br/>
      <label >External Design</label><br></br> */}
            <br />
            <button onClick={add}>Add</button>






        </div>
    )
}

export default CreateDesigner