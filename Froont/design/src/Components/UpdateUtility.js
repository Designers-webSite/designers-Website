import axios from 'axios'
import React from 'react'

export default function UpdateUtility() {

const[update,SetUpdate]=useState()
useEffect(() => {
    axios
    .get(`http://localhost:8080/utilit/update/`)
    return () => {
        cleanup
    }
}, [input])
    return (
        <div>


            
        </div>
    )
}
