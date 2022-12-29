// import './App.css';
// import { Butten } from './components/butten';
// import {Link} from './components/link';
// import Logo from "./components/logo"

// function App() {
//   return (
//     <div className="App">
//       {/* <Logo/>
//       <Link/>
//       <Butten/> */}
      
//     </div>
//   );
// }

// export default App;

import './App.css'
import { Fst } from './components/fstLine'
import { Heading} from './components/heading'
import { Snd } from './components/sndLine'

function App() {
  const data=[{hed1:"Mobie Operation System", head2:"Mobile Manufecturing"}]
  return (
    <div className="App">
      {data.map((el)=>{
        return <Heading val={el.hed1}/>
      })}
      <Fst/>
      <Snd/>

    </div>
  )
}

export default App
