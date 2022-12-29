export const Fst=()=>{
    const operation=["Android", "Blackberry", "Iphone", "Windows Phone"];
    return <div>
        {operation.map((el)=>{
          return  <li>{el}</li>
        })}
    </div>
} 