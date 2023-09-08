const notescontainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes() {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
        notescontainer.innerHTML = savedNotes;
    }
}

showNotes();

function updateStorage() {
    localStorage.setItem("notes", notescontainer.innerHTML);
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "delete.png";
    notescontainer.appendChild(inputBox).appendChild(img);

    // Call updateStorage to save the new note
    updateStorage();

    // Focus the newly created input box for user convenience
    inputBox.focus();
});

notescontainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    } else if (e.target.tagName === "P") {
        // No need to attach an event listener here, the event will bubble up
    }
});

// Listen for input changes within the notescontainer
notescontainer.addEventListener("input", function () {
    updateStorage();
});




