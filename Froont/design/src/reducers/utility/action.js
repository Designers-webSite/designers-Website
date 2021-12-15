export const setUtility=(utility)=>{
    return {
        action:"SET_UTILITY",
        payload:utility
    }

}
export const removeUtility=()=>{
    return {
        action:"REMOVE_UTILITY"
    }

}