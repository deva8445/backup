import React from "react";
import ReactDom from "react-dom";
const h1=React.createElement("h1",{},"Deva");
const img=React.createElement("img",{src:"https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"})
const p= React.createElement("p",{className:"para"},"Deva");

ReactDom.render(p,
    document.getElementById("root"));