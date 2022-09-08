import { evaluate } from "mathjs";
import { Input } from "./Components/Input";
const Parser = require('expr-eval').Parser;
const parser = new Parser()

var x;

const toMath = (text) =>{
  return(parser.parse(text))
}


//Two functions for bolzano cause it makes reusing the values easier.
const findPos = (func) =>{
  for(let i = -100; i <= 100; i++){
    if(func.evaluate({x: i}) > 0){
      return(i)
    }
  }
}

const findNeg = (func) =>{
  for(let i = -100; i <= 100; i++){
    if(func.evaluate({x: i}) < 0){
      return(i)
    }
  }
}

//Bisection interval is [a, b]
const bisect = (func, a, b) =>{
  
}

const clicked = (event) =>{
  x = document.getElementById('input').value
  x = toMath(x)
  console.log(x.evaluate({x: 5}))
}



function App() {
  return (
    <div className="App">
      <Input name="moi" inputName="input" btnText="moi" onClick={ (event) => {clicked(event)} }/>

      
      
    </div>
  );
}

export default App;
