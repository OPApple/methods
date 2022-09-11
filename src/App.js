import { evaluate } from "mathjs";
import { Input } from "./Components/Input";
const Parser = require('expr-eval').Parser;
const parser = new Parser()

var x;
var iterations;

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
  var c;

  for(var i = 0; i <= 100; i++){

    c = (a + b)/2
    console.log(c)  
  
  
    if (func.evaluate({x: a}) * func.evaluate({x: c}) < 0){
      b = c
    }else{
      a = c
    }

  }
  return(c.toFixed(3))

}

const clicked = (event) =>{
  x = document.getElementById('input').value
  x = toMath(x)
  console.log(bisect(x, findNeg(x), findPos(x)))
  var result = "x=" + bisect(x, findNeg(x), findPos(x))
  document.getElementById('result').innerHTML = result
}



function App() {
  return (
    <div className="flex h-screen
	  flex-col 
	  flex-wrap 
	  justify-center 
	  items-center">


      <Input 
        style="text-center" 
        inputStyle="bg-gray-200 focus:rounded-md ease-linear duration-200 my-2"  
        inputName="input" 
        break="flex-100" 
        btnStyle="rounded-lg bg-blue-400 hover:bg-blue-500 ease-linear duration-500 w-60" 
        btnText="Find roots" 
        onClick={ (event) => {clicked(event)} }
        />
     
     
     <span className="text-xl" id='result'></span>
      
      
    </div>
  );
}

export default App;
