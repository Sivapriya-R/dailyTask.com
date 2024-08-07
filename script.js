var popupbox = document.querySelector(".popup-box")
var popupoverlay = document.querySelector(".popup-overlay")
var popupbutton = document.getElementById("popup-button")
var cancelbutton =  document.getElementById("cancel-button")
var addbutton =  document.getElementById("add-button")

popupbutton.addEventListener("click",function(){
    popupoverlay.style.display = "block"
    popupbox.style.display = "block"
})

cancelbutton.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"
})

var container = document.querySelector(".container-bar")
var time = document.getElementById("task-timing")
var toDo = document.getElementById("todo")
var taskDescription = document.getElementById("task-description")

addbutton.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","task-container")
    div.innerHTML = `<h2>${time.value}</h2>
    <h5>${toDo.value}</h5>
    <p>${taskDescription.value}</p>
    <button onclick="de(event)">delete</button>`
    container.append(div)
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"
})

var delet = document.getElementById("d")

function de(event){
    event.target.parentElement.remove()
}

function t(){
    document.getElementById("myform").reset()
}