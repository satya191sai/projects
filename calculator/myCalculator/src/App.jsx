import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  const handler=(e)=>{
    setInput(e.target.value);
  }
   const handleBackspace = () => {
    setInput((prev) => prev.slice(0, -1));
  };
 const handleClick = (value) => {
  const newValue = String(value);

  // If input is empty, just add
  if (input === "" && newValue === "0") {
    setInput("0"); 
    return;
  }

  // If current input is "0" and another "0" comes → block
  if (input === "0" && newValue === "0") return;

  // If input ends with operator and then "0" typed, allow it (for decimals, fractions)
  if (/[+\-*/]0$/.test(input) && newValue === "0") return;

  // If input is "0" and a digit comes (like 5), replace 0 with that digit → avoid 05
  if (input === "0" && /[1-9]/.test(newValue)) {
    setInput(newValue);
    return;
  }

  setInput((prev) => prev + newValue);
};

  
  return (
<>    
      <div>
        <input type="text" value={input} onChange={handler} className='inputField' />
            <h1>Result:{result}</h1>
      </div>
      
      <div className="grid">
      <div className='4div'>
      <button onClick={()=>handleClick("%")}>%</button>
      <button onClick={()=>handleClick("/")}>/</button>
      <button onClick={()=>handleClick("*")}>*</button>
      <button onClick={handleBackspace}>X</button>
      </div>
      <div className='1div'>
      <button onClick={()=>handleClick("1")}>1</button>
      <button onClick={()=>handleClick("2")}>2</button>
      <button onClick={()=>handleClick("3")}>3</button>
      <button onClick={()=>handleClick("+")}>+</button>
      </div>
      <div className='2div'>
      <button onClick={()=>handleClick("4")}>4</button>
      <button onClick={()=>handleClick("5")}>5</button>
      <button onClick={()=>handleClick("6")}>6</button>
      <button onClick={()=>handleClick("-")}>-</button>
      </div>
      <div className='3div'>
      <button onClick={()=>handleClick("7")}>7</button>
      <button onClick={()=>handleClick("8")}>8</button>
      <button onClick={()=>handleClick("9")}>9</button>
       <button onClick={()=>setInput(input+".")}>.</button>
      </div>
      <div className='5div'>
      <button onClick={()=>setInput("")}>CLR</button>
      <button onClick={()=>handleClick("0")}>0</button>
      <button onClick={()=>handleClick("00")}>00</button>
      <button onClick={()=>setResult(eval(input))}>=</button>
      </div>
      
</div>
</>
  )
}

export default App

