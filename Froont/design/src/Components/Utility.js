import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addUtility } from "../reducers/utility/action"
import axios from 'axios'
import DesignerInfo from './DesignerInfo'
import Gallery from '../Components/Gallery'
function Utility() {

    const dispatch = useDispatch()
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [date, setDate] = useState("")
    const [instructions, setInstructions] = useState("")

    // const[gallery,setGallery]=useState([])




    //   useEffect(() => {
    //     axios.get("http://localhost:8080/gallery").then((r) => {

    //       console.log(r);
    //       console.log(r.data);

    //       setDesigner(r.data);
    //       //console.log(r.data)
    //     });
    //   }, []);

    const handelChangeTitle = (e) => {
        setTitle(e.target.value)


    }
    const handelChangeDate = (e) => {
        setDate(e.target.value)

    }
    const handelChangeDescrption = (e) => {
        setDescription(e.target.value)
    }
    const handelChangeinstructions = (e) => {
        setInstructions(e.target.value)
    }
    // let designId = document.getElementById("design")

    const add = () => {
        const data = {
            title,
            description,
            date,
            instructions,
            designer: {
                id: 2
            },
            gallery: {
                id: 2
            }


        }


        axios
            .post("http://localhost:8080/utility", data)
            .then((res) => {
                const action = addUtility(res.data)
                dispatch(action)

            })
            .catch((err) => {

                console.log(err);

            });


    }

    return (
        <div  className='addServiceForm'>
            <div className='container'>
            <div className='roww'>
                <div className='form-groupp'>
                  <label for="add">Add New service:</label><br />
                    <label >Title</label><br />
                    <input className='form-control' type="text" id="title" name="title" onChange={handelChangeTitle} />
                </div>
                
                <div className='form-group'>
                    <label >Service creation date</label><br />
                    <input className='form-control' type="date" id="date" name="date" onChange={handelChangeDate} />
                </div>
 
                <div className='form-group'>
                    <label > Description</label>
                    <textarea  id="description" rows={5} name="description" className='form-control' onChange={handelChangeDescrption}></textarea>
                </div>
                
                <div className='form-group'>
                    <label>Instructions</label>
                    <textarea  id="instructions" rows={5} name="instructions" className='form-control' onChange={handelChangeinstructions}></textarea>
                </div>
               <div className='form-group'>
               {/* <Gallery /> */}
               </div>
               <div className='form-group my-3'>
                    <button id="brn_service" className='btn' onClick={add}>Add</button>
               </div>
                
                


            </div>
            </div>
        </div>
            
    )
}
export default Utility  
