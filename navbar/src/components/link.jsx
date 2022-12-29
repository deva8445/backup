 export const Link=()=>{
    const data= ["Services", "Projects", "Data"];
    return <div>
        {data.map((el)=>{
            <a href="#">{el}</a>
        })}

    </div>
}

