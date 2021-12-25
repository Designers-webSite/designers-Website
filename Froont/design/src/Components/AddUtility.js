import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUtility } from "../reducers/utility/action"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { storage } from "../FireBase/Index"

function AddUtility() {

    const dispatch = useDispatch()
    const [title, setTitle] = useState("")
    const [designType, setDesignType] = useState("")
    const [description, setDescription] = useState("")
    const [date, setDate] = useState("")
    const [instructions, setInstructions] = useState("")

    const [picture, setPicture] = useState(null)
    const [url, setUrl] = useState("")
    const [progress, setProgress] = useState(0);

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
        if (e.target.files[0]) {
            setPicture(e.target.files[0]);

        }
    }

    const handleUpload = (e) => {
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
    console.log("image :", picture);


    // let designId = document.getElementById("design")

    const add = () => {
        const data = {
            title,
            description,
            date,
            instructions,
            picture: url,
            user: {
                id: 2
            },

            gallery:
                [
                    { "image": "" },
                    { "image": "" },
                    { "image": "" }
                ]



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
        <div>
            <form className='form-1'>
                <br />
                <br />
                <label for="add">Add New service:</label><br />
                <br />

                <input name="title" type="text" class="feedback-input" placeholder="Title" onChange={handelChangeTitle} />
                <select className="input2" onChange={handelChangeDesignType}>
                    <option value="hide"> designType </option>
                    <option value="internal design">internal design</option>
                    <option value="external design">external design</option>

                </select>
                <input name="date" type="date" class="feedback-input" placeholder="Service creation date" onChange={handelChangeDate} />
                <textarea rows={5} name="description" class="feedback-input" placeholder="Description" onChange={handelChangeDescrption}></textarea>
                <textarea rows={5} name="description" class="feedback-input" placeholder="Instructions" onChange={handelChangeinstructions}></textarea>

                <label>Gallery Add</label><br />
                <progress value={progress} max="100" />
                <br />
                <br />

                <input type="file" onChange={handleChange} />

                <button onClick={handleUpload}>Upload</button>

                <br />
                {/* {url}  */}
                <br />
                <img src={url || "http://via.placeholder.com/300x400"} alt="firebase-image" />
            </form>
            <button className='submit' onClick={add}>Submit</button>
        </div>

        /* <div  className='addServiceForm'>
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
                       {/* <Gallery /> */
        //    </div>
        //    <div className='form-group my-3'>
        //         <button id="brn_service" className='btn' onClick={add}>Add</button>
        //    </div>




        // </div>
        // </div>
        // </div> */}

    )
}
export default AddUtility
