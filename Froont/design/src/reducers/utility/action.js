export const addUtility=(utility)=>{
    return {
        action:"ADD_UTILITY",
        payload:utility
    }

}
export const removeUtility=()=>{
    return {
        action:"REMOVE_UTILITY"
    }

}