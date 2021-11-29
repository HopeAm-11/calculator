let text = document.getElementById("p"); // get the display 
let numbers = document.getElementsByName("numbers"); // get numbers 
let operators = document.getElementsByName("operator"); // get operators 
let equal = document.getElementById("op"); // get operators 


let ope = "" // stores the operators 
let num1 
let num2


// we use the .forEach method to iterate through each button
numbers.forEach((number) => {
  // and for each one we add a 'click' listener
 number.addEventListener('click', (e) => {
    //alert(button.value);
    text.innerText += e.target.value
    //number.value// add singlar value of the button 
  });
});

operators.forEach((op) => {

  // and for each one we add a 'click' listener
 op.addEventListener('click', () => {
  if(text.textContent !== ""){
    num1 = text.textContent
    ope = op.value
    text.textContent = ""
  }

    //alert(button.value);
    //text.innerHTML += e.target.value
    //number.value// add singlar value of the button 
  
  });
});


// equal section 

// calculat section: 


function calculate(num1, ope, num2) {
  switch (ope) {
     case '+':
        return +num1 + +num2;
     case '-':
        return +num1 - +num2;
  }
}




// clear buttion 

document.getElementById('btn-clear').addEventListener('click',()=>{
  text.innerHTML = '';
})

equal.addEventListener('click',()=>{
  num2 =text.textContent 
  text.textContent =  calculate(num1,ope,num2)
 

})