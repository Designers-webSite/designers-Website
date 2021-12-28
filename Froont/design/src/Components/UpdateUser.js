import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector } from "react-redux";
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

// INSERT INTO utilities (id,title,description,duration,price,design_type,instructions, user_id,gallery_id) VALUES (1,"front","fghjkl","2020-12-03", 200,"internal","ggg", 2,2);



export default function UpdateUser() {
    const state = useSelector((state) => {
        return {
            user: state.userReducer,
            token: state.userReducer.token
        }
    })
    const { user_id } = useParams()
    const navigate = useNavigate();
    const [fullName, setFullName] = useState("")
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [fill, setFill] = useState("")

    const data = {
        "fullName": fullName,
        "userName": userName,
        "email": email,


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

    const config = {
        headers: { Authorization: `Bearer ${state.token}` }
    }
    const x = JSON.parse(localStorage.getItem("user"))
    console.log(x.id);
    useEffect(() => {
        axios
            //  .get("http://localhost:8080/user/"+x.id)
            .get(`http://localhost:8080/user/${user_id}`)
            .then(res => {
                setFullName(`${res.data.fullName}`)
                setUserName(`${res.data.userName}`)
                setEmail(`${res.data.email}`)

            })
            .catch(err => { console.log(err.response); })
    }, [])


    const updateInfo = () => {
        // if((email).includes("@gmail.com")||(email).includes("@hotmail.com")||(email).includes("@yahoo.com")|| (email).includes("@outlook.com")){
        //         setEmail(true)
        //         navigate("/login");
        //     }else 
        //     setEmail(false) 

        if (fullName.length < 1 || email.length < 1 || userName.length < 1) {
            setFill("required filed")
        }


        else {


            axios
                .put(`http://localhost:8080/user/${user_id}`, data, config)
                .then((res) => {
                    navigate(`/${user_id}`)


                })
                .catch((err) => {

                    console.log(err);
                });
        }

    }



    return (
        <div>
            <form className="sign-up">
                <h2 className="heading mb-4">Update User</h2>
                <div className="form-group fone mt-2"> <i class="fas fa-user"></i>
                    <input type="name" className="form-control" placeholder={fill.length > 1 ? fill : "Name"} onChange={handelChangeFullName} />
                </div>
                <div className="form-group fone mt-2"> <i class="fas fa-user"></i>
                    <input type="name" className="form-control" placeholder={fill.length > 1 ? fill : "userName"} onChange={handelChangeUserName} />
                </div>
                <div className="form-group fone mt-2"> <i class="fas fa-envelope"></i>
                    <input type="email" className="form-control" placeholder={fill.length > 1 ? fill : "email"} onChange={handelChangeEmail} /> </div>
                {/* <div className={matchEmail ? "form_message form_message-error m-hidden " : "form_message form_message-error "}>you have enterd an invalid e-mail please try agin.</div> */}



            </form>
            <button type="button" className="btn btn-success mt-5" onClick={updateInfo}>Update</button>

        </div>





    )
}
