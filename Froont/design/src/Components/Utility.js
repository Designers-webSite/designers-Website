import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { useEffect } from 'react'



export default function Utility() {

    const state = useSelector((state) => {
        return {
            user: state.userReducer.user,
            token: state.userReducer.token
        }
    })
    const navigate = useNavigate()
    const [utility, setUtility] = useState([])
    const [loading, setLoading] = useState(false)

    const { utility_id } = useParams()
    console.log(utility_id);
    useEffect(() => {
        axios
            .get(`http://localhost:8080/utility/row/${utility_id}`)
            .then(response => {
                setUtility(response.data)
                console.log(response.data);
            })
            .catch(err => { console.log(err.data); })
    }, [])

    const deleteUtility = () => {

        const config = {
            headers: { Authorization: `Bearer ${state.token}` }
        }
        axios
            .delete(`http://localhost:8080/utility/all/${utility_id}`, config)
            .then(res => {

                navigate("")

            })
            .catch(err => { console.log(err.data); })

    }




    return (

        <div className="items">

            <div className='profile sections'>
                <div className='container'>
                    <div className='utility .inner-wrapper'>
                        <div className='top-wrapper'>
                            <div className="head">
                                {/* <div className='utility.box'> */}
                                    {/* Put image src here */}
                                    {/* <img src={utility.gallery.map((ele)=>
                                        {ele.picture})} className='mw-100' srcalt="./images/img4.jpg" /> */}
                                        <img src={utility.picture} className='mw-100' srcalt="./images/img4.jpg" />
                                </div>
                                <div className='row'>
                                    <div className='col-md-6'>
                                       
                                        <div className='box'>
                                        <h3>{utility.title}</h3>
                                            <hr />
                                            <h3>description :</h3>
                                            <p>{utility.description}</p>
                                            <hr />
                                            <h3>Instruction  : </h3>
                                            <p> {utility.instructions}</p>




                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        // </div>


    )
}
