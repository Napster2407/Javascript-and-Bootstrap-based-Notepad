console.log("This is Note app")
shownotes();
//If user add a note, add a local storage
let addbutton = document.getElementById('addbutton');
addbutton.addEventListener("click", function (e) {
    let addtxt = document.getElementById("addtxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.push(addtxt.value);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    addtxt.value = "";
    console.log(notesobj);
    shownotes(); //Function applies to show notes 
})
//function to show notes from local storage
function shownotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let html = "";
    notesobj.forEach(function (element, index) {
        //adding more cards algo
        html += `
        <div class="notecard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Your Note ${index + 1}</h5>
            <p class="card-text">${element}</p>
            <button id="${index}"onclick="deletenote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
    </div>
        `;
    });
    let noteselm = document.getElementById('notes');
    if (notesobj.length != 0) {
        noteselm.innerHTML = html;
    }
    else {
        noteselm.innerHTML = 'Nothing to show right now :)';
    }
}

//Function to delete a note
function deletenote(index) {
    console.log("i am deleting", index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }

    notesobj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    shownotes();
}
let searchtxt=document.getElementById('searchtxt');
searchtxt.addEventListener("input",function(){
    let inputval=searchtxt.value.toLowerCase();
    // console.log('Input event',inputval);
    let notecards=document.getElementsByClassName('notecard');
    Array.from(notecards).forEach(function(element){
    
        let cardtxt=element.getElementsByTagName("p")[0].innerText;
        if(cardtxt.includes(inputval)){
            element.style.display="block";
        }
        else{
            element.style.display="none";
        }
        // console.log(cardtxt)
    })
        
})