import axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { storage } from "../FireBase/Index"
import { MdSouth } from 'react-icons/md';
import Swal from 'sweetalert2';
import "./Update.css"

import ValidaitonUpdateUtility from "./ValidaitonUpdateUtility"

export default function UpdateUtility() {
    


    const { utility_id } = useParams()
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch()
    const [title, setTitle] = useState("");
    const [designType, setDesignType] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [instructions, setInstructions] = useState("");
    const [picture, setPicture] = useState(null)
    const [url, setUrl] = useState("")
    const [progre, setProgre] = useState(0);
    const [pictures, setPictures] = useState([])
    const [urls, setUrls] = useState([])
    const [progress, setProgress] = useState(0);

    console.log("i'm heeereee");
    const x = JSON.parse(localStorage.getItem('user'));

    const data = {
        title: title,
        description: description,
        date: date,
        instructions: instructions,
        designType: designType,
        picture: url,
        user: {
            id: x.id
        },

        gallery: urls.map((url) => {
            return { picture: url }
        })

    }

    const navigate = useNavigate()

    const state = useSelector((state) => {
        return {
            user: state.userReducer.user,
            token: state.userReducer.token
        }

    })
    console.log(state.token);



    const handelChangeTitle = (e) => {
        setTitle(e.target.value)
    }
    const handelChangeDesignType = (e) => {
        setDesignType(e.target.value)
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



    const handleChange = e => {

        for (let i = 0; i < e.target.files.length; i++) {
            const newImage = e.target.files[i];
            console.log(newImage);
            newImage["id"] = Math.random();
            setPictures((prevState) => [...prevState, newImage]);
            console.log(pictures);

        }
        console.log(pictures);

    }
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
            .then(() => alert("All images uploaded"))
            .catch((err) => console.log(err));
    };
    console.log("images: ", picture);
    console.log("url", url);
    console.log("images: ", pictures);

    console.log("urls", urls);;

    const handleChangeOne = e => {
        if (e.target.files[0]) {
            setPicture(e.target.files[0]);

        }
    }

    const handleUploadOne = (e) => {
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
    console.log(state.token)
    const config = {

        headers: { Authorization: `Bearer ${state.token}` 
   }
    }
             //--------------------------------------get information utility for update -------------------------------------

    useEffect(() => {
        axios
            .get(`http://localhost:8080/utility/row/${utility_id}`)
            .then(res => {
                console.log(res.data);
                setTitle(`${res.data.title}`)
                setDesignType(`${res.data.designType}`)
                setDescription(`${res.data.description}`)
                setInstructions(`${res.data.instructions}`)
                setPicture(`${res.data.picture}`)
                console.log(res.data.picture);


                setPictures(res.data.gallery)
                console.log(res.data.gallery);



            })
            .catch(err => { console.log(err.response); })
    }, [])

     //--------------------------------------Update information utility -------------------------------------

    const updateInfo = () => {

        console.log(ValidaitonUpdateUtility(title, designType, description, instructions));
        console.log("enter func");
        let utilityValidationResult = ValidaitonUpdateUtility(title, designType, description, instructions)

        if (utilityValidationResult) {
            setErrors(utilityValidationResult);
            console.log(utilityValidationResult);
        }

        else
            setErrors({})

        console.log(data);
        console.log("utility_id", utility_id);

        console.log("validationResult", utilityValidationResult);
        if (utilityValidationResult == null) {


            console.log("paassed if");
            axios
                .put(`http://localhost:8080/utility/update/${utility_id}`, data, config)
                .then((res) => {

                    console.log(res, "ffff");
                    navigate("/")
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your sucess update Servies ',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/');


                })
                .catch((err) => {
                    Swal.fire({
                        title: 'Error!',
                      text: 'some error in update',
                        icon: 'error',
                      confirmButtonText: 'Cool'
                  })

                    console.log(err);
                });
        }


    }



    return (
        < div className='conButton'> 
               <div className="containerUser">
        <form className='formUser'>
       
                <br /><h4 className='hh4'>update service:</h4><br /><br />
                <div className="input-group input-group-icon"><input type="text" placeholder={title} onChange={handelChangeTitle}  />
                {errors.title && <p className="error">{errors.title}</p>}
                </div>
                <br/>



                <div className='custom-upload'>
                    <label htmlFor='up0'>upload photo</label><br />
                    <progress  value={progre} max="100" /> 


                    <input type="file" placeholder='add ' id='up0' onChange={handleChangeOne} />

                </div>
                <img  className='imgUtility'src={picture} style={{ width: "50px" }} />
                <br />
                <button  className='btn btn-warning'  id="btnUtiliy1" onClick={handleUploadOne}>Upload</button>
<br/>

                <div className='form-group my-3'>
                    <select id="designType" className='input-group input-group-icon' onChange={handelChangeDesignType}>
                        <option value="hide"  >Design Type</option>
                        <option value="Internal Design">Internal Design</option>
                        <option value="External Design">External Design</option>
                    </select>
                    {errors.designType && <p className="error">{errors.designType}</p>}

                </div>
                <br/>
                {console.log(pictures)}

                <textarea rows={5} name="description" class="feedback-input"  id="area"placeholder={description} onChange={handelChangeDescrption}></textarea>
                {errors.description && <p className="error">{errors.description}</p>}

                <textarea rows={5} name="description" class="feedback-input"id="area" placeholder={instructions} onChange={handelChangeinstructions}></textarea>
                {errors.instructions && <p className="error">{errors.instructions}</p>}
               


                <label>Gallery Add</label>
                <br />
                <progress  value={progress} max="100" /> 
                <br />

                <input type="file" id='file_img' className="form-control" onChange={handleChange} />
                {/* <button  className='btn btn-warning' onClick={handleUpload}>Upload</button>

                <br/> */}
                <br />


                {console.log("picture", pictures.length)}
                {pictures.map((ele) =>
                    <>


                        <img className='imgUtility'
                            style={{ width: "50px" }}

                            src={picture}
                            alt="firebase-image" />

                    </>
                )}
                <br />
                <br />

                <button  className='btn btn-warning'  id="btnUtiliy1" onClick={handleUpload}>Upload</button>

                <br />

            </form>
           
           


        </div>
        <br/>
        <button className='btn btn-warning' id="btto" type="submit" onClick={updateInfo}>Edit Utility</button>
        </div>


    )
}
