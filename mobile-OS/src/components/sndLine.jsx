export const Snd=({css})=>{
    const operation=[{style:sqr,data:"Samsung"},{style:sqr,data:"HTC"},{style:circle,data:"Micromax"},{style:pln,data:"Apple"}];
    return <div>
        {operation.map((el)=>{
            <li className={el.style}>{el.data}</li>
        })}
    </div>
} 