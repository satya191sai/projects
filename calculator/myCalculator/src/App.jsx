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
    // ✅ Prevent multiple leading zeros (00, 012 etc.)
    if (/^0\d/.test(input + value)) return;

    setInput((prev) => prev + value);
  };

  
  return (
<>    
      <div>
        <input type="text" value={input} onChange={handler} className='inputField' />
            <h1>Result:{result}</h1>
      </div>
      
      <div className="grid">
      <div className='4div'>
      <button onClick={()=>setInput(input+"%")}>%</button>
      <button onClick={()=>setInput(input+"/")}>/</button>
      <button onClick={()=>setInput(input+"*")}>*</button>
      <button onClick={handleBackspace}>X</button>
      </div>
      <div className='1div'>
      <button onClick={()=>setInput(input+"1")}>1</button>
      <button onClick={()=>setInput(input+"2")}>2</button>
      <button onClick={()=>setInput(input+"3")}>3</button>
      <button onClick={()=>setInput(input+"+")}>+</button>
      </div>
      <div className='2div'>
      <button onClick={()=>setInput(input+"4")}>4</button>
      <button onClick={()=>setInput(input+"5")}>5</button>
      <button onClick={()=>setInput(input+"6")}>6</button>
      <button onClick={()=>setInput(input+"-")}>-</button>
      </div>
      <div className='3div'>
      <button onClick={()=>setInput(input+"7")}>7</button>
      <button onClick={()=>setInput(input+"8")}>8</button>
      <button onClick={()=>setInput(input+"9")}>9</button>
       <button onClick={()=>setInput(input+".")}>.</button>
      </div>
      <div className='5div'>
      <button onClick={()=>setInput("")}>CLR</button>
      <button onClick={()=>setInput(input+"0")}>0</button>
      <button onClick={()=>setInput(input+"00")}>00</button>
      <button onClick={()=>setResult(eval(input))}>=</button>
      </div>
      
</div>
</>
  )
}

export default App

