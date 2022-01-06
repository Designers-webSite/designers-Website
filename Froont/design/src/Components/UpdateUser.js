import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector } from "react-redux";
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { addUser } from '../reducers/user/action';
import { useDispatch } from 'react-redux';
import {storage} from "../FireBase/Index"
import Alert from "react-bootstrap/Alert";



export default function UpdateUser() {
    const dispatch=useDispatch()
    const state = useSelector((state) => {
        return {
            user: state.userReducer,
            token: state.userReducer.token
        }
    })
    const { user_id } = useParams()
    const navigate = useNavigate();
    const [fullName, setFullName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const[picture,setPicture]=useState(null);
    const[url,setUrl]=useState("");
    const [progress, setProgress] = useState(0);
    const[update,SetUpdate]=useState();

    const [fill, setFill] = useState("");

    const data = {
        "fullName": fullName,
        "userName": userName,
        "email": email,
        "password":password,
        picture:url


    }
    const handelChangeFullName = (e) => {
        setFullName(e.target.value);
    };
    const handelChangeUserName = (e) => {
        setUserName(e.target.value);
    };
    const handelChangeEmail = (e) => {
        setEmail(e.target.value);
    };
    const handelChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const config = {
        headers: { Authorization: `Bearer ${state.token}` }
    }
    const x = JSON.parse(localStorage.getItem("user"))
    console.log(x.id);
    useEffect(() => {
        axios
            .get(`http://localhost:8080/user/${user_id}`)
            .then(res => {
                setFullName(`${res.data.fullName}`)
                setUserName(`${res.data.userName}`)
                setEmail(`${res.data.email}`)
                setPicture(`${res.data.email}`)
              

            })
            .catch(err => { console.log(err.response); })
    }, [])

  
    

    const updateInfo = () => {
      
        if (fullName.length < 1 || userName.length < 1 || email.length < 1 || picture.length < 1) {
            setFill("required filed")
        }


        else {


            axios
                .put(`http://localhost:8080/user/${user_id}`, data, config)
                .then((res) => {
                //     <Alert variant="success" style={{ width: "42rem" }}>
                //     <Alert.Heading>
                //       This is a success alert which has green background
                //     </Alert.Heading>
                //   </Alert>
                    navigate("/")


                })
                .catch((err) => {

                    console.log(err);
                });
            }
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
        <div>
            <br/>
            <br/>
            <br/>
            <form className='form-1'>
            
           
                <h2 className="heading mb-4">Update User</h2>
                <div className="form-group fone mt-2"> <i class="fas fa-user"></i>
                    <input type="name" className="form-control" placeholder={fill.length > 1 ? fill : "Name"} onChange={handelChangeFullName} />
                </div>
                <div className="form-group fone mt-2"> <i class="fas fa-user"></i>
                    <input type="name" className="form-control" placeholder={fill.length > 1 ? fill : "userName"} onChange={handelChangeUserName} />
                </div>

                
                
                <div className="form-group fone mt-2"> <i class="fas fa-envelope"></i>
                    <input type="email" className="form-control" placeholder={fill.length > 1 ? fill : "email"} onChange={handelChangeEmail} /> </div>


                <div  className="form-group custom-upload mt-2"> <i class="fas fa-lock"></i>
                 <label htmlFor='file_img'>Upload Photo</label>
                 <input type="file" id='file_img' className="form-control"onChange={handleChange}/>
                 <button class="fas fa-lock"  onClick={handleUpload}>Upload</button> 
                  {/* <button class="fas fa-lock"  onClick={updatePic}>Add</button>   */}

                    {/* <div  className="image"><i  className="fas fa-eye"></i></div> */}
 
                </div> 
            
            <button type="button" className="btn btn-success mt-5" onClick={updateInfo}>Update</button>
            </form>
        </div>





    )
    }

    