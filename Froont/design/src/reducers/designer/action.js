export const addDesigner=(designer)=>{
    return {
        type:"ADD_DESIGNER",
        payload:designer
    }

}
export const removeDesigner=()=>{
    return {
        type:"REMOVE_DESIGNER"
    }
}