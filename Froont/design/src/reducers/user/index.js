const initialState={
    user:{}
}

const userReducer=(state=initialState,{type,payload})=>{
    switch (type) {
        case "ADD_USER":
            console.log(payload);
            return {
                user:payload
            }
            
            case "REMOVE_USER": 
            return{
                user:{}
            }

    
        default:
            return state;
    }
}
export default userReducer;