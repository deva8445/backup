import { legacy_createStore } from "redux";
import { todoreducer } from "./Redux/todo/reducer";


export const store= legacy_createStore(todoreducer)