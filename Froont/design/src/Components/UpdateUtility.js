import axios from 'axios'
import React,{useState} from 'react'
import { useParams } from 'react-router-dom';

export default function UpdateUtility() {

    const{utility_id}=useParams()
 const dispatch = useDispatch()
const [title, setTitle] = useState("");
const [designType,setDesignType ] = useState("");
const [description, setDescription] = useState("");
const [date, setDate] = useState("");
const [instructions, setInstructions] = useState("");
const[picture,setPicture]=useState(null)
const[url,setUrl]=useState("")
const [progre, setProgre] = useState(0); 

const [pictures, setPictures] = useState([])
const [urls, setUrls] = useState([])
const [progress, setProgress] = useState(0);



const data = {
    title: title,
    description: description,
    date:date,
    instructions: instructions,
    designType :  designType,
    picture:url,
    user: {
        id: 1
    },

    gallery: urls.map((url)=>{
        return {picture : url}
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
                newImage["id"] = Math.random();
                setPictures((prevState) =>[...prevState, newImage]);

        }
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
                setTitle(`${res.data.title}`)
                setDesignType(`${res.data.designType}`)
                setDescription(`${res.data.description}`)
                setDate(`${res.data.date}`)
                setInstructions(`${res.data.instructions}`)
               

            })
            .catch(err => { console.log(err.response); })
    }, [])

    

    return (
        <div>


            
        </div>
    )
}
