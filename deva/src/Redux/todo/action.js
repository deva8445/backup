
import * as types from "./actionTypes"

export const addtodo=(payload)=>{
    console.log(payload)
    return {
        type:types.ADD_TODO,
        payload
    }
}