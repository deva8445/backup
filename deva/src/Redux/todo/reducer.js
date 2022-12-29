
import * as types from "./actionTypes"


const initialState={
    todo:[],
    
}
export const todoreducer=(state=initialState,{type,payload})=>{
     
    switch(type){
        case types.ADD_TODO:{
            return {
                todo:[...state.todo,payload]
            }
        }
        default:{
            return state
        }
    }

}