import React from "react";
import ReactDom from  "react-dom";

// let h1=document.createElement("h1");
// h1.textContent="Devashish";
// console.log("Deva_Ashish");
// console.log("Deva_Ashish");
const show=true;
const img=React.createElement("img",{width:"200px",src:"https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"},);

const p=React.createElement("p",{className:"file"},show?img:null,"Deva");
ReactDom.render(p,document.getElementById("data"));
