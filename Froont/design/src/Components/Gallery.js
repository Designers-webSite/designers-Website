import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import {addGallery} from "../reducers/gallery/action"
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {storage} from "../FireBase/Index"

 function Gallery() {
 const dispatch=useDispatch();  
 const navigate=useNavigate()

const[picture,setPicture]=useState(null)
const[url,setUrl]=useState("")
const [progress, setProgress] = useState(0);
const state = useSelector((state)=>{
  return {
      user: state.userReducer.user,
      token: state.userReducer.token
  }
})
const handelAdd =(e)=>{
  e.preventDefault();
const data={
  picture:url
}
axios
.post("http://localhost:8080/gallery", data)
.then((res) => {
    const action = addGallery(res.data)
    dispatch(action)

})
.catch((err) => {

    console.log(err);

});

}

const handleChange=e=>{
  if(e.target.files[0]){
    setPicture(e.target.files[0]);

  }
}

const handleUpload=(e)=>{
  e.preventDefault()
  const uploadTask = storage.ref(`images/${picture.name}`).put(picture);
  uploadTask.on(
      "state_changed",
      snapshot => {
          const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
      },
      error => {
          console.log(error);
      },
      () => {
          storage
             .ref("images")
             .child(picture.name)
             .getDownloadURL()
             .then(url => {
                 setUrl(url);
             });
      }
      );

}
console.log("image :" , picture);






    return (
      <div className='createGallery'>
        {/* <form className='add-gallery' onSubmit={(e)=>add(e)} encType='multipart/form-data'> */}
            {/* <input type="image " on */}
            
            <form className='form-1'>
            <label>Gallery Add</label><br/>
            <progress value={progress} max="100"/>
            <br/>
            <br/>

            <input type="file" onChange={handleChange}/>
            
             <button  onClick={handleUpload}>Upload</button> 
             <button  onClick={handelAdd}>Add</button> 
             <br/>
             {/* {url}  */}
             <br/>
             <img src={url || "http://via.placeholder.com/300x400"} alt="firebase-image"/>
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





