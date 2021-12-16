export const addUtility=( utility)=>{
    return {
        type:"ADD_UTILITY",
        payload: utility
    }

}
export const removeUtility=()=>{
    return {
        action:"REMOVE_UTILITY"
    }

}
