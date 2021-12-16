export const addGallery=(gallery)=>{
    return {
        type:"ADD_GALLERY",
        payload:gallery
    }

}
export const removeGallery=(gallery)=>{
    
    return {
        type:"REMOVE_GALLERY"
    }

}