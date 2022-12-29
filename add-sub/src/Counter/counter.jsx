import React from 'react';

function Calculator() {
  const [counter, setCounter]=React.useState(1);
  const increment=()=>{
    if(counter>=10){
      return;
    }
    setCounter(counter+1);
  };
  const sub=()=>{
    if(counter<=1){
      return;
    }
    setCounter(counter-1);
  }
  const double=()=>{
    setCounter(counter*2);
  }
  const clear=()=>{
    setCounter(1);
  }
  return (
    <>
      <h1>Counter</h1>  
      <h1 className={counter%2===0?"green":"red"}>{counter}</h1>  
      <button onClick={increment}>Add</button>
      <button onClick={sub}>Reduce</button>
      <button onClick={double}>Double</button>
      <button onClick={clear}>Back to Start</button>
    </>
  );
}

export default Calculator;
