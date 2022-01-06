import axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { storage } from "../FireBase/Index"
import { MdSouth } from 'react-icons/md';


export default function UpdateUtility() {

    const { utility_id } = useParams()
    const [message, setMessage] = useState(" ")
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

    const data = {
        title: title,
        description: description,
        date: date,
        instructions: instructions,
        designType: designType,
        picture: url,
        user: {
            id: 1
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
            setPictures((prevState) =>[...prevState, newImage]);
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
    const config = {
        headers: { Authorization: `Bearer ${state.token}` }
    }
    const x = JSON.parse(localStorage.getItem("user"))
    console.log(x.id);
    useEffect(() => {
        axios
            .get(`http://localhost:8080/utility/row/${utility_id}`)
            .then(res => {
                // setTitle(`${res.data.title}`)
                // setDesignType(`${res.data.designType}`)
                // setDescription(`${res.data.description}`)
                // setDate(`${res.data.date}`)
                // setInstructions(`${res.data.instructions}`)
                // setPicture(`${res.data.picture}`)
                // setPictures(`${res.data.pictures}`)



            })
            .catch(err => { console.log(err.response); })
    }, [])


    const updateInfo = () => {



        console.log(data);
        console.log("utility_id",utility_id);
        axios
            .put(`http://localhost:8080/utility/update/${utility_id}`, data, config)
            .then((res) => {
               
                navigate("/")


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
                <h3>update service:</h3><br />
                <br />

                <input name="title" type="text" class="feedback-input" placeholder="Title" onChange={handelChangeTitle} />

                <div className='custom-upload'>
                    <label htmlFor='up0'>upload photo</label><br />
                    {/* <span className='allUpload'> {message}</span> */}

                    <input type="file" placeholder='add ' id='up0' onChange={handleChangeOne} />
                </div>


                <button className='btn-upload' onClick={handleUploadOne}>Upload</button>

                {/* <input name="title" type="text" class="feedback-input" placeholder="design Type" onChange={handelChangeDesignType} /> */}
                <div className='form-group my-3'>
                    <select id="designType" className='form-select input' onChange={handelChangeDesignType}>
                        <option value="hide"  >Design Type</option>
                        <option value="Internal Design">Internal Design</option>
                        <option value="External Design">External Design</option>
                    </select>
                </div>

                <input name="date" type="date" class="feedback-input" placeholder="Service creation date" onChange={handelChangeDate} />
                <textarea rows={5} name="description" class="feedback-input" placeholder="Description" onChange={handelChangeDescrption}></textarea>
                <textarea rows={5} name="description" class="feedback-input" placeholder="Instructions" onChange={handelChangeinstructions}></textarea>


                <label>Gallery Add</label><br />
                <progress value={progress} max="100" />
                <br />
                <br />

                <input type="file" id='file_img' className="form-control"onChange={handleChange}/>
                 <button class="fas fa-lock"  onClick={handleUpload}>Upload</button> 

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
                          <img 
                          style={{width:"50px"}}
                           key={i}
                          src={url }
         alt="firebase-image"  />

                        </>
                    ))
                }
        


            </form>
            {console.log(data)}
            <button className='btn-sub' onClick={updateInfo}>Edit Utility</button>

        </div>


    )
}
