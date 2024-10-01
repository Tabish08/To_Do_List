let list = document.getElementById("list");
let inputBox = document.getElementById("input-box");


function addTask(){
    if(inputBox.value === ""){
        alert("add your task");
    }
    else{
        let task = document.createElement("li");
        task.textContent = inputBox.value;
        list.appendChild(task);
        let span = document.createElement("span");
        span.textContent = "\u00d7";
        task.appendChild(span);
    }

    inputBox.value = "";
    saveData();
}
 list.addEventListener("click" , (e) => {
   if(e.target.tagName == "LI"){
   e.target.classList.toggle("checked");
   saveData();
  }
  else if(e.target.tagName == "SPAN" ){
    e.target.parentElement.remove();
    saveData();
  }
    
 })
  
 function saveData(){
   localStorage.setItem("task", list.innerHTML);
 }

 function showData(){
    list.innerHTML = localStorage.getItem("task");
 }
 showData();



