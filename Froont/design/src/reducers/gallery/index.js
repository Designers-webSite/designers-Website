const initialState={
    gallery:{}

}

 const galleryReducer=(state=initialState,{type,payload})=>{
    switch (type) {
        case "ADD_GALLERY":
            console.log(payload);
            return {
                gallery:payload
            }
            
            case "ADD_GALLERY": 
            return{
                gallery:{}
            }

    
        default:
            return state;
    }
}
export default galleryReducer;