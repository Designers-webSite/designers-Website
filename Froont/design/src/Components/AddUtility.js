import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUtility } from "../reducers/utility/action"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { storage } from "../FireBase/Index"
import Swal from 'sweetalert2'
import ValidaitonAddUtility from './ValidaitonAddUtility'
import "./Update.css"


function AddUtility() {

    const dispatch = useDispatch()
    const [errors, setErrors] = useState({});
    const [title, setTitle] = useState("");
    const [designType,setDesignType ] = useState("");
    const [description, setDescription] = useState("");
    const [instructions, setInstructions] = useState("");
    const[picture,setPicture]=useState(null)
    const[url,setUrl]=useState("")
    const [progre, setProgre] = useState(0); 
    const [pictures, setPictures] = useState([])
    const [urls, setUrls] = useState([])
    const [progress, setProgress] = useState(0);
    const [required, setRequired] = useState();
    const [error,setError]=useState(" required field")
    const[message,setMessage]=useState("")

    const navigate = useNavigate()

    const state = useSelector((state) => {
        return {    
            user: state.userReducer.user,
            token: state.userReducer.token
        }
    })



    const handelChangeTitle = (e) => {
        setTitle(e.target.value)


    }
    const handelChangeDesignType = (e) => {
        setDesignType(e.target.value)


    }

    // const handelChangeDate = (e) => {
    //     setDate(e.target.value)

    // }
    const handelChangeDescrption = (e) => {
        setDescription(e.target.value)
    }
    const handelChangeinstructions = (e) => {
        setInstructions(e.target.value)
    }

    const handleChange = e => {
    
            for (let i = 0; i < e.target.files.length; i++) {
                const newImage = e.target.files[i];
                newImage["id"] = Math.random();
                setPictures((prevState) =>[...prevState, newImage]);

        }
        console.log(pictures);

    }
         //--------------------------------------Upload  pictures-------------------------------------

    const handleUpload = (e) => {
        e.preventDefault()
        const promises = [];
        pictures.map((image) => {
         const uploadTask = storage.ref(`images/${image.name}`).put(image);
          promises.push(uploadTask);
          uploadTask.on(
            "state_changed",
            (snapshot) => {
              const progress = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
              );
              setProgress(progress);
            },
            (error) => {
              console.log(error);
            },
            async () => {
              await storage
                .ref("images")
                .child(image.name)
                .getDownloadURL()
                .then((urls) => {
                    console.log(urls);
                  setUrls((prevState) => [...prevState, urls]);


                });
            }
          );
        });


        Promise.all(promises)
          .then(() => setMessage("All images uploaded"))
          .catch((err) => console.log(err));
      };
      console.log("images: ", picture);
      console.log("url", url);
      console.log("images: ", pictures);

      console.log("urls", urls);
      const data = {
        title: title,
        description: description,
        // date:date,
        instructions: instructions,
        designType :  designType,
        picture:url,
        user: {
            id: state.user.id
        },

        gallery: urls.map((url)=>{
            return {picture : url}
        })

    }

    //--------------------------------------create utility-------------------------------------- 
    const add = () => { 
        let validationResult =  ValidaitonAddUtility( title,designType,description, instructions )
        console.log(validationResult);
            if(validationResult) 
                setErrors(validationResult);
    
            else 
            setErrors({})
        
    
    
    if (validationResult==null){
       
        console.log(data);
        if (title.length < 1 || designType.length < 1 ||description.length<1 ||instructions.length<1||url.length<1 ||urls.length<1) {
            setRequired("This Field is Requierd");
        }else{
        axios
            .post("http://localhost:8080/utility/add/", data)
            .then((res) => {
                const action = addUtility(res.data)
                dispatch(action)
                Swal.fire({
                                         position: 'top-end',
                                         icon: 'success',
                                         title: 'add utility sucess',
                                         showConfirmButton: false,
                                         timer: 1500
                                       })
                                      navigate("/")

            })
            .catch((err) => {

                console.log(err);
                Swal.fire({
                    title: 'Error!',
                   text: 'some filed is empty ',
                     icon: 'error',
                   confirmButtonText: 'Cool'
               })
                console.log(err);
            });
        


        }
    }
}
    const handleChangeOne=e=>{
        if(e.target.files[0]){
          setPicture(e.target.files[0]);
      
        }
      }
     //--------------------------------------Upload one picture-------------------------------------
      
      const handleUploadOne=(e)=>{
        e.preventDefault()
        const uploadTask = storage.ref(`image/${picture.name}`).put(picture);
        uploadTask.on(
            "state_changed",
            snapshot => {
                const progre = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgre(progre);
            },
            error => {
                console.log(error);
            },
            () => {
                storage
                   .ref("image")
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
        < div className='conButton'>
                    <div  id="containerUser">

            <form className='formUser ' id="f1">
                
                <br />
                <br />
                <h2 className="heading mb-4" id="heah2">Add New Service</h2> 
                <br />

                <input name="title" type="text" class="feedback-input" placeholder="Title" id="area" onChange={handelChangeTitle} />
                {errors.title && <p className="error">{errors.title}</p>}

                
                <div className='custom-upload'>
                { <progress value={progre} max="100"  className='progr'/> }
                    <label htmlFor='up0'>upload photo</label>
                   
                 
                    <input type="file" placeholder='add ' id='up0'  onChange={handleChangeOne} />
                   
                
                 </div>
                
                <br/>
                <button onClick={handleUploadOne}  className='btn btn-warning' id="btnUtiliy" >Upload</button>
                <br/>
                <br/>

                <img  className='srcImage'  src={url}  style={{width:"50px"}}/>

                <div className='form-group my-3'>
                <select id="designType" className='form-select input' onChange={handelChangeDesignType}>
                    <option value="hide" >Design Type</option>
                    <option value="Internal Design">Internal Design</option>
                    <option value="External Design">External Design</option>
                    {errors.designType && <p className="error">{errors.designType}</p>}

                    
                </select>
               
                </div >
                <br/>
                {/* <div >
                <input name="date" type="date" class="feedback-input" placeholder="Service creation date" onChange={handelChangeDate} />
                </div> */}
                <textarea rows={8} name="description" class="feedback-input" id="area" placeholder="Description" onChange={handelChangeDescrption}></textarea>
                {errors.description && <p className="error">{errors.description}</p>}
                <textarea rows={8} name="description" class="feedback-input" placeholder="Instructions" id="area" onChange={handelChangeinstructions}></textarea>
                {errors.instructions && <p className="error">{errors.instructions}</p>}
                 <progress  value={progress} max="100" /> 
                <br />
                <br />
                <label >Gallery Add</label>


                <input type="file" id='up0' className="form-control"onChange={handleChange}/>
                <br/>
                 <button className="fas fa-lock" className='btn btn-warning'  id="btnUtiliy"onClick={handleUpload}>Upload</button> 

                <br />
                {urls.map((url,i)=>(
                    <div key={i}>
                      

                    </div>
                ))

                }
                <br/>
                {
 urls.map((url,i)=>(
                        <>
                          <img  className='imgUtility'
                          style={{width:"50px"}}
                           key={i}
                          src={url }
         alt="firebase-image"  />

                        </>
                    ))
                }
        
      
    
            </form>

         

            </div> 
               <button id="button11"   className='btn btn-warning'   onClick={add}>Submit</button>
               </div>

    )
}

export default AddUtility





// import React from 'react'
// import { useState, useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { addUtility } from "../reducers/utility/action"
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom'
// import { storage } from "../FireBase/Index"
// import Swal from 'sweetalert2'

// function AddUtility() {

//     const dispatch = useDispatch()
//     const [title, setTitle] = useState("");
//     const [designType,setDesignType ] = useState("");
//     const [description, setDescription] = useState("");
//     const [date, setDate] = useState("");
//     const [instructions, setInstructions] = useState("");
//     const[picture,setPicture]=useState(null)
//     const[url,setUrl]=useState("")
//      const [progre, setProgre] = useState(0); 

//     const [pictures, setPictures] = useState([])
//     const [urls, setUrls] = useState([])
//     const [progress, setProgress] = useState(0);

//     const navigate = useNavigate()

//     const state = useSelector((state) => {
//         return {    
//             user: state.userReducer.user,
//             token: state.userReducer.token
//         }
//     })



//     const handelChangeTitle = (e) => {
//         setTitle(e.target.value)


//     }
//     const handelChangeDesignType = (e) => {
//         setDesignType(e.target.value)


//     }

//     const handelChangeDate = (e) => {
//         setDate(e.target.value)

//     }
//     const handelChangeDescrption = (e) => {
//         setDescription(e.target.value)
//     }
//     const handelChangeinstructions = (e) => {
//         setInstructions(e.target.value)
//     }

//     const handleChange = e => {
    
//             for (let i = 0; i < e.target.files.length; i++) {
//                 const newImage = e.target.files[i];
//                 newImage["id"] = Math.random();
//                 setPictures((prevState) =>[...prevState, newImage]);

//         }
//         console.log(pictures);

//     }
//     const handleUpload = (e) => {
//         e.preventDefault()
//         const promises = [];
//         pictures.map((image) => {
//          const uploadTask = storage.ref(`images/${image.name}`).put(image);
//           promises.push(uploadTask);
//           uploadTask.on(
//             "state_changed",
//             (snapshot) => {
//               const progress = Math.round(
//                 (snapshot.bytesTransferred / snapshot.totalBytes) * 100
//               );
//               setProgress(progress);
//             },
//             (error) => {
//               console.log(error);
//             },
//             async () => {
//               await storage
//                 .ref("images")
//                 .child(image.name)
//                 .getDownloadURL()
//                 .then((urls) => {
//                     console.log(urls);
//                   setUrls((prevState) => [...prevState, urls]);


//                 });
//             }
//           );
//         });


//         Promise.all(promises)
//           .then(() => alert("All images uploaded"))
//           .catch((err) => console.log(err));
//       };
//       console.log("images: ", picture);
//       console.log("url", url);
//       console.log("images: ", pictures);

//       console.log("urls", urls);
//       const data = {
//         title: title,
//         description: description,
//         date:date,
//         instructions: instructions,
//         designType :  designType,
//         picture:url,
//         user: {
//             id: state.user.id
//         },

//         gallery: urls.map((url)=>{
//             return {picture : url}
//         })

//     }

    
//     const add = () => {
       
//         console.log(data);

//         axios
//             .post("http://localhost:8080/utility/add/", data)
//             .then((res) => {
//                 const action = addUtility(res.data)
//                 dispatch(action)
//                 Swal.fire({
//                     position: 'top-end',
//                     icon: 'success',
//                     title: 'add utility sucess',
//                     showConfirmButton: false,
//                     timer: 1500
//                   })
//                   navigate("/")


//             })
//             .catch((err) => {
//                 Swal.fire({
//                             title: 'Error!',
//                             text: 'Do you want to continue',
//                             icon: 'error',
//                            confirmButtonText: 'Cool'
//                     })
//                 console.log(err);

//             });


//     }
//     const handleChangeOne=e=>{
//         if(e.target.files[0]){
//           setPicture(e.target.files[0]);
      
//         }
//       }
      
//       const handleUploadOne=(e)=>{
//         e.preventDefault()
//         const uploadTask = storage.ref(`image/${picture.name}`).put(picture);
//         uploadTask.on(
//             "state_changed",
//             snapshot => {
//                 const progre = Math.round(
//                     (snapshot.bytesTransferred / snapshot.totalBytes) * 100
//                 );
//                 setProgre(progre);
//             },
//             error => {
//                 console.log(error);
//             },
//             () => {
//                 storage
//                    .ref("image")
//                    .child(picture.name)
//                    .getDownloadURL()
//                    .then(url => {
//                        setUrl(url);
//                    });
//             }
//             );
      
//       }
//       console.log("image :" , picture);
      

//     return (
//         <div>
//             <form className='form-1'>
//                 <br />
//                 <br />
//                 <label for="add" className='addUtility'>Add New service:</label><br />
//                 <br />

//                 <input name="title" type="text" class="feedback-input" placeholder="Title" onChange={handelChangeTitle} />
                
               
//                 <progress value={progress} max="100"  />
//                 <div className='custom-upload'>
//                     <label htmlFor='up0'>upload photo </label>
                 
//                     <input type="file" placeholder='add ' id='up0'  onChange={handleChangeOne} />
//                     <br></br><br/>
//                     <img src={url}  style={{width:"50px"}}/>
//                 <br />
//                 <input type="file" placeholder='add ' id='up0'  onChange={handleChangeOne}  required/>
//                 </div>
                
                
//                 <button className='btn btn-warning' onClick={handleUploadOne}>Upload</button>

//                 {/* <input name="title" type="text" class="feedback-input" placeholder="design Type" onChange={handelChangeDesignType} /> */}
//                 <div className='form-group my-3'>
//                 <select id="designType" className='form-select input' onChange={handelChangeDesignType}>
//                     <option value="hide" >Design Type</option>
//                     <option value="Internal Design">Internal Design</option>
//                     <option value="External Design">External Design</option>
//                 </select>
//                 </div>
                
//                 <input name="date" type="date" class="feedback-input" placeholder="Service creation date" onChange={handelChangeDate} />
//                 <textarea rows={5} name="description" class="feedback-input" placeholder="Description" onChange={handelChangeDescrption}></textarea>
//                 <textarea rows={5} name="description" class="feedback-input" placeholder="Instructions" onChange={handelChangeinstructions}></textarea>

//                 <label>Gallery Add</label><br />
//                 <div className='custom-upload'>
//                 <progress value={progress} max="100" />
//                 <label htmlFor='up0'>upload photo </label>
//                 <br />
//                 <br />
               
//                 <input type="file"  id='up0' className="form-control"onChange={handleChange}/>
               
//                  <button class="btn btn-warning"  onClick={handleUpload}>Upload</button> 

//                 <br />
//                 {urls.map((url,i)=>(
//                     <div key={i}>
                      

//                     </div>
//                 ))

//                 }
//                 <br/>
//                 {
//  urls.map((url,i)=>(
//                         <>
//                           <img 
//                           style={{width:"50px"}}
//                            key={i}
//                           src={url }
//          alt="firebase-image"  />

//                         </>
//                     ))
//                 }
//         </div>
    
//             </form>
//             <button className='btn btn-warning' id="btn-submit" onClick={add}>Submit</button>
//         </div> 

//     )
// }

// export default AddUtility