export const Snd=()=>{
    const operation=[{style:"sqr",data:"Samsung"},{style:"sqr",data:"HTC"},{style:"circle",data:"Micromax"},{style:"pln",data:"Apple"}];
    return <div>
        {operation.map((el)=>{
           return <li className={el.style}>{el.data}</li>
        })}
    </div>
} 