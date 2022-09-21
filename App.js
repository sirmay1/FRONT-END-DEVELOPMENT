import { useState } from 'react';

const App = () => {

    const [count, setCount] = useState("");
    
    const backspace = () => {
        try {
            setCount(count.slice(0, -1))
        } catch (error) {
            setCount("")
        }
    }
    const calculate = () => {
        try {
           setCount(eval(count)); 
        } catch (error) {
            setCount("Error");
        }
    }
    return ( 
      <div id="position">
        <div className="display_grid" id="CLOSE">
        <div className="black-block">
        <button className="btn_x"> X </button> 
        </div> 
        <center>
        <input type="text" className="text_window" onChange={(e) => setCount(e.target.value)} value={count}></input><br/>
        <button className = "btn_white"value = "7"onClick = {(e) => setCount(count + e.target.value) } > 7 </button> 
        <button className = "btn_white"value = "8"onClick = {(e) => setCount(count + e.target.value) } > 8 </button>  
        <button className = "btn_white"value = "9"onClick = {(e) => setCount(count + e.target.value) } > 9 </button> 
        <button className = "btn_grey"value = "/"onClick = {(e) => setCount(count + e.target.value) } > / </button> <br />
        <button className = "btn_white"value = "4"onClick = {(e) => setCount(count + e.target.value) } > 4 </button> 
        <button className = "btn_white"value = "5"onClick = {(e) => setCount(count + e.target.value)}> 5 </button> 
        <button className = "btn_white"value = "6"onClick = {(e) => setCount(count + e.target.value) } > 6 </button> 
        <button className = "btn_grey"value = "*" onClick = {(e) => setCount(count + e.target.value) } > * </button><br/>
        <button className = "btn_white"value = "1"onClick = {(e) => setCount(count + e.target.value) } > 1 </button> 
        <button className = "btn_white"value = "2"onClick = {(e) => setCount(count + e.target.value) } > 2 </button> 
        <button className = "btn_white"value = "3"onClick = {(e) => setCount(count + e.target.value) } > 3 </button> 
        <button className = "btn_grey"value = "-"onClick = {(e) => setCount(count + e.target.value) } > - </button><br/>
        <button className = "btn_white"value = "0"onClick = {(e) => setCount(count + e.target.value) } > 0 </button> 
        <button className = "btn_grey" value = "." onClick = {(e) => setCount(count + e.target.value) } > . </button> 
        <button className = "btn_grey"value = "="onClick = {() => calculate()} > = </button> 
        <button className = "btn_grey"value = "+"onClick = {(e) => setCount(count + e.target.value) } > + </button> 
        <button id ="C"value = "C"onClick = {() => backspace()} > C / CE </button>  
        </center> 
        </div> 
        </div>
    );
}
export default App;