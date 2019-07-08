// Fahrenheit TO Celsiuis

// Event Listener
document.getElementById('calc-btn1').addEventListener('click', Fahrenheit)
document.getElementById('calc-btn2').addEventListener('click', Celsius)

// Event Function
function Fahrenheit(){
    // INPUT- Get number
    let num1 = Number(document.getElementById('num1').value);
   
    
    // PROCESS- Convert
    let Convert = (num1-32)*5/9

    // OUTPUT- Display 
    document.getElementById('result1').innerHTML = Convert;
}

// Celsiuis To  Fahrenheit

// Event Listener
document.getElementById('calc-btn2').addEventListener('click', Convert)

// Event Function
function Celsius(){
    // INPUT- Get number
    let num2 = Number(document.getElementById('num2').value);
   
    
    // PROCESS- Convert
    let convert = (num2*9/5)+32

    // OUTPUT- Display 
    document.getElementById('result2').innerHTML = convert;
}