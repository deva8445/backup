import { useState } from "react"
import { useSelector,useDispatch } from "react-redux/es/exports"
import { addtodo } from "../Redux/todo/action"
import { ADD_TODO } from "../Redux/todo/actionTypes"
export const Todo=()=>{
    // const [todo,settodo]=useState(["masai","grazewal"])
    const dispatch=useDispatch()
    const todo=useSelector((state)=>state.todo)
    const [text,settext]=useState("")

    function handlechange(e) {
        settext(e.target.value)

    }
    const butaddtodo=()=>{
        // settodo([...todo,text])
    //    addtodo(text)
    dispatch(addtodo(text))
        settext("")
    }
    
   
    
    return <div>
        <input value={text} type="text" placeholder="add todo" onChange={handlechange}/>
        <button onClick={butaddtodo}>Add</button>
        {todo?.map((el)=>{
            return <div>
                <p>{el}</p>
            </div>
        })}
 
    </div>
}