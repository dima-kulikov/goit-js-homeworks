let render = document.querySelector('[data-action="render"]');
let destroy = document.querySelector('[data-action="destroy"]');
let boxes = document.getElementById("boxes");
render.addEventListener("click", getAmount);
destroy.addEventListener("click", destroyBoxes);
let pp = 1;

function getAmount() {
    var amount = + document.querySelector("#myNumber").value;
    createBoxes(amount);
    // console.log(amount)
  }


  function createBoxes(amount) {
    var basicSize = 30;
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < amount; i++) {
      var size = basicSize + i * 10;
      var div = document.createElement("div");
      var p = document.createElement("p");
      p.innerHTML = pp +=1;
      div.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;
      div.appendChild(p);
      fragment.appendChild(div);
    }
    boxes.appendChild(fragment);
  }

  function destroyBoxes() {
    boxes.innerHTML = "";
  }
  
  function random() {
    return Math.floor(Math.random() * 256);
  }