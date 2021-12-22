import React from 'react'

export default function SearchUtilityById() {
    const [searchById, setSearchById] = useState([]);
    const history = useHistory();


    let id = data.data.id;
    let url = "http://localhost:8080/utility/" + data.data.id;
    useEffect(() => {
        axios
          .get(url)
          .then((r) => {
            setSearchById(r.data);
            console.log(r.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }, [data]);
      
    return (
        <div>
          {searchById.map((ele)=>{
            <div>
             <p>{ele.title}</p> 
             
            

              
              </div>
          })}
            
        </div>
    )
}
export default SearchUtilityById