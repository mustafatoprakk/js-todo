const noteText=document.querySelector("#note_text")
const addBtn=document.querySelector("#add_btn")
const noteList=document.querySelector("#note_list")

addBtn.addEventListener("click", function(){
    let noteParagraph=document.createElement("p")
    noteList.appendChild(noteParagraph)
    noteParagraph.classList.add("paragraph")
    noteParagraph.innerHTML=noteText.value
    noteText.value=""

    noteParagraph.addEventListener("click", function(){
        noteParagraph.style.textDecoration="line-through"
        noteParagraph.classList.add("p-bg-color")
    })
})