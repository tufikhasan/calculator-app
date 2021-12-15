import React, {useState} from 'react'
import "./App.css";

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");
  const ops = ['/','*','+','-','.']

  const updateCalc = value => {
    if (ops.includes(value) && calc === ''){
      return;
    }else if (ops.includes(value) && ops.includes(calc.slice(-1))) {
      return;
    }
    setCalc(calc + value);
    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  }
  const calculate = () =>{
    setCalc(eval(calc).toString());
  }
  const deleteLast = () =>{
    if (calc === "") {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  }
  const clearCalc = () =>{
    setCalc("");
    setResult('');
  }
  return (
    <div className="main">
      <div className="display">
        <p className="inputBox">{result? <span>({result})</span>: ''} {calc || '0'}</p>
      </div>
      <div className="buttons">
        <button onClick={clearCalc} id="clear">AC</button>
        <button onClick={deleteLast} id="delete_single_num">C</button>
        <button onClick={() => updateCalc('/')} id="Normal_btn">/</button> 
        <button onClick={() => updateCalc('*')} id="Normal_btn">*</button>
      </div>
      <div className="buttons">
        <button key={7} onClick={() => updateCalc('7')} id="Normal_btn">7</button>
        <button key={8} onClick={() => updateCalc('8')} id="Normal_btn">8</button>
        <button key={9} onClick={() => updateCalc('9')} id="Normal_btn">9</button>
        <button onClick={() => updateCalc('-')} id="Normal_btn">-</button>
      </div>
      <div className="buttons">
        <button key={4} onClick={() => updateCalc('4')} id="Normal_btn">4</button> 
        <button key={5} onClick={() => updateCalc('5')} id="Normal_btn">5</button>
        <button key={6} onClick={() => updateCalc('6')} id="Normal_btn">6</button> 
        <button onClick={() => updateCalc('+')} id="Normal_btn">+</button>
      </div>
      <div className="buttons">
        <button key={1} onClick={() => updateCalc('1')} id="Normal_btn">1</button>
        <button key={2} onClick={() => updateCalc('2')} id="Normal_btn">2</button>
        <button key={3} onClick={() => updateCalc('3')} id="Normal_btn">3</button>
        <button onClick={() => updateCalc('.')}  id="Normal_btn">.</button>
      </div>
      <div className="buttons">
        <button onClick={() => updateCalc('0')} id="Normal_btn">0</button>
        <button onClick={() => updateCalc('00')} id="Normal_btn">00</button>
        <button onClick={calculate} id="equalTo">=</button>
      </div>
    </div>
  );
}

export default App;
