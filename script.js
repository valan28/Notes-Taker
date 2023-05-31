const notesContainer =document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes(){ // used to get the already existing stuffs and show them to user
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage(){
    localStorage.setItem("notes",notesContainer.innerHTML);
}

createBtn.addEventListener("click", ()=>{
    let inputBox =document.createElement("p");
    let img = document.createElement("img");
    inputBox.className ="input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src ="images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img); //delete image will be displayed on the input box 
})

notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG") // used to remove  the input box (remove)
    {
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName ==="P")
    {
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt =>{
            nt.onkeyup = function()
            {
                updateStorage();     
            }
        })
    }
})

document.addEventListener("keydown",event =>{
    if(event.key === "Enter")
    {
        document.execCommand("insertLineBreak");
        event.preventDefault;
    }
})