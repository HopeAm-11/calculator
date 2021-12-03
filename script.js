let previousDisplay = document.getElementById("p-prev-display"); // get the display 
let currentDisplay = document.getElementById("current-p-display"); // get the display 
let numbers = document.getElementsByName("numbers"); // get numbers 
let operators = document.getElementsByName("operator"); // get operators 
let equal = document.getElementById("op"); // get operators 
//let dot = document.getElementById("dot"); // get operators 
let del = document.getElementById("btn-delete"); // get operators 
let ope // stores the operators 
let num1
let num2
//let arr =[]
//let arrToNum
//const initialValue = 0;
// we use the .forEach method to iterate through each button
numbers.forEach((number) => {
  // and for each one we add a 'click' listener
  number.addEventListener('click', (e) => {
    //alert(button.value);
    //number.value// add singlar value of the button 

    if (ope == undefined && num1 == undefined) {

      currentDisplay.innerText += e.target.value
    } else if (ope !== undefined && num1 !== undefined) {
      currentDisplay.innerText += e.target.value
      num2 = currentDisplay.textContent
    

    }
  })
})
//else if (num1 !== undefined && num2 == undefined){
//num2 =  text.textContent
//  text.textContent = ""
//}

//dot.addEventListener('click',(e)=>{
//  currentDisplay.textContent = e.target.value
//  })


operators.forEach((op) => {

  // and for each one we add a 'click' listener
  op.addEventListener('click', (e) => {
    if (currentDisplay.textContent !== "" && num2 == undefined) {
      previousDisplay.textContent = currentDisplay.textContent + ' '+ op.textContent;
      num1 = currentDisplay.textContent
      currentDisplay.textContent = "";
      ope = op.value
      // num2 =text.innerText // not working
      //arr.push(text.textContent);
      //arrToNum = arr.map((i) => Number(i));
      //console.log(calculate(num1,ope,num2))
      //text.textContent =calculate(num1,ope,num2)
    } else if (num1 !== undefined && num2 !== undefined) {
      previousDisplay.textContent = previousDisplay.textContent + currentDisplay.textContent;
      currentDisplay.textContent = calculate(num1, ope, num2);
      ope = op.value
      num2 = undefined
      num1 = currentDisplay.textContent;
      previousDisplay.textContent = currentDisplay.textContent + ' '+op.textContent;

      currentDisplay.textContent = ""
      //text.textContent ="";  }
    }
    //console.log(calculate(num1,ope,num2))
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
      //return +num1 + +num2;
      return +num1 + +num2;
    case '-':
      return  +num1- +num2;
    case '*':
      return +num1 * +num2;
    case '÷':
      return +num1 / +num2;
  }
}




// clear buttion 

document.getElementById('btn-clear').addEventListener('click', () => {
  //text.innerHTML = '';
  num1 = undefined;
  num2 = undefined;
  ope = undefined;
  currentDisplay.textContent = ""
  previousDisplay.textContent = ""
  //arr = []
  //arrToNum =[]
})



equal.addEventListener('click', () => {
 // num2 = currentDisplay.value
 if(num1 !== undefined && num2 !==undefined){
  previousDisplay.textContent = previousDisplay.textContent +  ' ' + currentDisplay.textContent;
  currentDisplay.textContent = calculate(num1, ope, num2)
  num1 = undefined
  num2 = undefined
  ope = undefined
  //text.textContent = arrToNum.map(test2)
 } else if(num2 == undefined){
   currentDisplay.textContent = currentDisplay.textContent;
 }
})

// delete btn 

  del.addEventListener('click', () => {
  result = currentDisplay.textContent.slice(0,-1);
  currentDisplay.textContent = result;
   })


  