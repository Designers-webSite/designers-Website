const initialState={
    designer:{}
}

const designerReducer=(state=initialState,{type,payload})=>{
    switch (type) {
        case "ADD_DESIGNER":
            console.log(payload);
            return {
                designer:payload
            }
            
            case "REMOVE_DESIGNER": 
            return{
                designer:{}
            }

    
        default:
            return state;
    }
}
export default designerReducer;