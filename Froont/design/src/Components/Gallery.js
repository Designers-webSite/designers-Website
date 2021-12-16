import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import {addGallery} from "../reducers/gallery/action"
import axios from 'axios';

 function Gallery() {
 const dispatch=useDispatch();   
// const[pictures,setPictures]=useState("")
const[name,setName]=useState("")
const[description,setDescription]=useState("")

// const handelChangepictures=(e)=>{
//   setPictures(e.target.value);
//    };
const handelChangeName=(e)=>{
      setName(e.target.value);
  };
const handelChangDescription=(e)=>{
  setDescription(e.target.value);
};



const add=()=>{
  const data={
    // pictures,
    name,
    description,
      
      
  }

axios
  .post("http://localhost:8080/gallery",data)
  .then((res)=>{
      const action=addGallery(res.data)
      dispatch(action)

  })
  .catch((err)=>{

      console.log(err);
  });
}


    return (
        <div>
            {/* <input type="image " on */}
            <label>Gallery</label><br/>
            <label >name</label>
            <input type="text" onChange={handelChangeName}/>
            <lable>Description</lable><br/>
            <input type="text" onChange={handelChangDescription}/>
            <button onClick={add} >ADD</button>


            
        </div>
    )
}

export default Gallery
