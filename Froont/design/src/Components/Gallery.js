import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import {addGallery} from "../reducers/gallery/action"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

 function Gallery() {
 const dispatch=useDispatch();  
 const navigate=useNavigate()
// const[pictures,setPictures]=useState("")
const[name,setName]=useState("")
const[description,setDescription]=useState("")
const[pic,setPic]=useState("")
const state = useSelector((state)=>{
  return {
      user: state.userReducer.user,
      token: state.userReducer.token
  }
})




// const handelChangepictures=(e)=>{
//   setPictures(e.target.value);
//    };
const handelChangeName=(e)=>{
      setName(e.target.value);
  };
const handelChangDescription=(e)=>{
  setDescription(e.target.value);
};





const add=(e)=>{
  e.preventDefault();
  const data={
    // pictures,
    name,
    // pic,

    // description,
      
      
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
  navigate("/addService")
}
// https://www.devglan.com/react-js/file-upload-react-spring-rest

// const onFileChangeHandler = (e) => {
//   e.preventDefault();
//   this.setState({
//       selectedFile: e.target.files[0]
//   });
//   const formData = new FormData();
//   formData.append('file', this.state.selectedFile);
//   fetch('http://localhost:3000/uploads/pictures', {
//       method: 'post',
//       body: formData
//   }).then(res => {
//       if(res.ok) {
//           console.log(res.data);
//           alert("File uploaded successfully.")
//       }
//   });
// };


    return (
      <div className='createGallery'>
        {/* <form className='add-gallery' onSubmit={(e)=>add(e)} encType='multipart/form-data'> */}
            {/* <input type="image " on */}
            
            <form className='form-1'>
            <label>Gallery Add</label><br/>
            
             <input name="title" type="text" class="feedback-input" placeholder="name"onChange={handelChangeName}  /> 
             <button className='submit' onClick={add}>Submit</button>  
           </form>

            {/* <label className='uploade-image-label' htmlFor="image-upload">
                Image Upload
            </label>
            <input type="file" id="image-upload" onChange={onFileChangeHandler}></input> */}
            {/* <img src= */}
            {/* <lable>Description</lable><br/>
            <input type="text" onChange={handelChangDescription}/> */}
            {/* <button  onClick={add} >ADD</button> */}


            
        {/* </form> */}
        </div>
    )
}

export default Gallery
