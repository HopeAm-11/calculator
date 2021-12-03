
let text = document.getElementById("p");
let one = document.getElementById("btn-one").value;
let two = document.getElementById("btn-two").value;

//document.getElementById("btn-one").addEventListener("click", ()=>{
//    let one = document.getElementById("btn-one").value
///    text.innerHTML = one;
//});

//document.getElementById("btn-two").addEventListener("click", ()=>{
  //  let two = document.getElementById("btn-two").value;
  //  text.innerHTML = two;
//});

//document.getElementById("btn-plus").addEventListener("click", ()=>{
 //   let plus = document.getElementById("btn-plus").value;
  //  text.innerHTML = plus;
//});

// Set up a single handler at a common ancestor of all the select elements
document.body.addEventListener("click", function(event){
    // event.target references the element that actually triggered the event
    // Check to see if the event was triggered by a DOM element you care to handle
    if(event.target.getElementsByTagName("button")){
      // Access the <p> element that is the previous sibling to the 
      // select that triggered the event and update it
      event.target.textContent = event.target.value
      text.innerHTML= event.target.value;
    }
  });

