var btn = document.querySelector(".btn")
var add = document.querySelector(".add")
var list = document.querySelector(".list")
var del=document.querySelector(".backspace")

var body=document.body


btn.addEventListener("click", function () {

  var value = add.value
  var li = document.createElement("li")
  li.innerHTML = value
  list.appendChild(li)
})

function BackSpace(){ 
  var input=document.querySelector(".add").value;
  var del=input.slice(0,-1);
  document.querySelector(".add").value=del;
}


function Change(){ 
  var value=document.querySelector(".changer").value;
  
  body.setAttribute('class',value)
}

