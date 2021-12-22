import React from 'react'
import { useParams } from 'react-router-dom'

export default function UtilityCard() {
const[utility,setUtility]=useState([])
const[designer,setDesigner]=useState([])
const[gallery,setGallery]=useState([])

const{id}=useParams

// useEffect(() => {
//     axios.get("http://localhost:8080/utility/"+id).then((response) => {
//       setDoctor(response.data);
//       setHospital(r.data.sectionId.hospital);
//       setspecialties(r.data.specialties)
//       console.log(doctor);
//       console.log(r.data);
//     });
//   }, []);

//   useEffect(() => {
//     axios.get("http://localhost:8080/utility/"+id).then((response) => {
//         setUtility(response.data)
//       setDoctor(response.data);
//       setHospital(r.data.sectionId.hospital);
//       setspecialties(r.data.specialties)
//       console.log(doctor);
//       console.log(r.data);
//     });
//   }, []);
//   return (
//     <>
//       <h1>Hello {doctorId}</h1>
//       <h1>Doctor name {doctor.name}</h1>
//       <h1>certificate date:  {doctor.certificate_date}</h1>
//       <h1>Hospilat name:  {hospital.name}</h1>
//       <h1>specialties:  {specialties.specialtyName}</h1>
//       <h1>Rate:  {doctor.total_rate}</h1>

//     return (
//         <div>
            
//         </div>
//     )
// }
}