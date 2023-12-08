
var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var addpopupbutton = document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
})  

// const close = document.querySelector(".close")

// close.addEventListener("click",function(){
//     popupoverlay.style.display="none";
// })

var clearpopup = document.getElementById("clear-popup")

clearpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
})


var container = document.querySelector(".container")
var addnotes = document.getElementById("add-notes")
var titleinput = document.getElementById("title-input")
var titledate = document.getElementById("title-date")
var descriptioninput = document.getElementById("description-input")

addnotes.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML =`<h2>${titleinput.value}</h2>
    <h5>${titledate.value}</h5>
    <p>${descriptioninput.value}</p>
    <button onclick="deletenotes(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
    
})

function deletenotes(event){
    event.target.parentElement.remove()
}   

