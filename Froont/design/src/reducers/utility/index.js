const initialState={
    utility:{}
}

const utilityReducer=(state=initialState,{type,payload})=>{
    switch (type) {
        case "SET_UTILITY":
            console.log(payload);
            return {
                utility:payload
            }
            
            case "REMOVE_UTILITY": 
            return{
                utility:{}
            }

    
        default:
            return state;
    }
}
export default utilityReducer;