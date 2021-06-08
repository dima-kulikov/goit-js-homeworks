// let amount = document.getElementById("myNumber").value;
// let ansver = document.getElementById("boxes");

const render = document.querySelector("[data-action]");

render.addEventListener('click', function myFunction() {
    var amount = document.getElementById("myNumber").value;
    document.getElementById("boxes").innerHTML = amount;
});







// function CreateBoxes(amount) {
//     this.number = amount;

//   }
  


//   let user = new CreateBoxes("5");
  
//   console.log(ansver.innerHTML = amount.value);
